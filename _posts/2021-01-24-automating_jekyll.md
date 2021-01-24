---
title: "Automating jekyll build"
toc: true
toc_sticky: true
excerpt_separator: "<!--more-->"
categories:
  - programming
tags:
  - automating
  - server
  - design
---

# Backstory

As people might have noticed this website runs on jekyll, which is code that creates static websites. Great for my simple blogging use. The easiest way for me to get [this](https://mmistakes.github.io/minimal-mistakes/) nice skin working on github pages was to use their remote theme function. However, letting github compile the website leads to some limitation such as plugin use. In order to futureproof myself (files come and go...) I would rather compile it locally and make only use of github's free hosting. 

# Googling a solution

Google is my friend, apparently people compile Jekyll locally, mainly for unsupported plugin.  Therefore I searched using the following keywords "Jekyll static github pages with unsupported plugins" and came along [Dani's](https://tiefenauer.github.io/blog/gh-pages-plugins/) nice write-up. Unfortunately, his method on how to update the website didn't work for me, and is probably due to the lack of my understanding of how git works. I did follow the preceding steps in his guide.  However this lead me to a much better solution which automates a great deal and makes it as easy as a single push of a button ;).  Browsing the internet a bit more I came across [Surdu's](https://surdu.me/2020/02/04/jekyll-git-hook.html) script, which made life easier.

# Working out the details

The goal is to enable static webpage hosting on github. And also try to make this as effortless possible.  That is so I can focus my time on my projects and not the nitty gritty. 

At the end you will have achieved the following.

- Keep files in 1 repository, this makes sense as they belong together
- Store website files in the branch "head", as github will interpret this to the website files under yourname.github.io
- Store source files in the branch "source"
- Pushing your new posts will recompile the website and update your webpage accordingly

I will assume you understand: 

- Basics of git, at least how to set it. Such you can send git commands in the terminal
- Have jekyll already installed and working. If not see for example [this.](http://sgeos.github.io/jekyll/github/freebsd/2016/01/07/creating-a-jekyll-github-pages-blog-and-managing-it-with-freebsd.html)
- Basic use of unix 

## Separating by branching

In order for github to correctly interpret your files.  We should push the compiled files (defaults to `_site` -inside-) to our head branch. All other files are pushed to our source branch. To achieve this do the following. In your repository folder which is also the main jekyll folder now `root`,

1. Put `_site/` in the `.gitignore` file
2. `git checkout source`, push and `git checkout master`. Compile the website `bundle exec jekyll build`.
3. `cd _site` and `touch .nojekyll` this prevents github to compile
4. Go back to `root`, backup all files and remove everything inside except the `.gitignore` file. 
5. Copy everything inside `_site` -which you backed up- to `root` and push. Delete `_site`.
6. `git checkout sources` and copy everything back (not `_site`, should be removed) and push. Now github will display your locally compiled website. While your source files are inside the source branch.

'*' a push entails, easily,

```
git add .
git commit -m 'commit message'
git push
```



## Script for updating 

The complex workflow noted by Dani didn't work out and I am lazy. So we are going to automate the flow of updating the website and updating our branches accordingly. This script is based on Surdu's script, but first.

1. Create a file "pre-push" `nano root/.git/hooks/pre-push` 

2. With the following content

   ```
   #!/bin/sh
   # This script assumes the master branch is the website therefore all compiled files should be in master branch
   # the source branch holds all your files, please put <_site/> in your git.ignore file
   
   # If any command fails in the below script, exit with error
   set -e
   
   # Set the name of the folder that will be created in the parent
   # folder of your repo folder, and which will temporarily
   # hold the generated content.
   temp_folder="_source-temp"
   
   # Make sure our main code runs only if we push the master branch
   if [ "$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)" == "source" ]; then
   	# Store the last commit message from master branch
   	last_message=$(git show -s --format=%s master)
   
   	# Build our Jekyll site
   	bundle exec jekyll build
   
   	# Move the generated site in our temp folder
   	mv _site ../${temp_folder}
   
   	# Checkout the gh-pages branch and clean it's contents
   	git checkout master
   	rm -rf *
   
   	# Copy the site content from the temp folder and remove the temp folder
   	cp -r ../${temp_folder}/* .
   	rm -rf ../${temp_folder}
   
   	# Commit and push our generated site to GitHub
   	git add -A
   	git commit -m "Built \`$last_message\`"
   	git push
   
   	# Go back to the source branch
   	git checkout source
   else
   	echo "Not source branch. Skipping build"
   fi
   
   ```

3. `chmod +x root/.git/hooks/pre-push`

4. Add your new files and recompile by doing a push in `root`.

# End

If anything is unclear or not working don't hesitate to leave a comment (if it works).