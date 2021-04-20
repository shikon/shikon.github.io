git add .
git commit -m 'lazy update with script'
git push
chown -R Ryuuta:Boss /mnt/myblog/shikon.github.io

setenv ALGOLIA_API_KEY 033337088f8bf0e6298ea3df3e165107 
bundle exec jekyll algolia
