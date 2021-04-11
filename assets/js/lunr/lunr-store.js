var store = [{
        "title": "Hello world!",
        "excerpt":"The quick brown fox jumped over  the lazy dog… This is my first test post.  ","categories": ["electronics"],
        "tags": [],
        "url": "https://shikon.github.io/electronics/hello-world/",
        "teaser": null
      },{
        "title": "Printing O-rings for dad",
        "excerpt":"Backstory   Today dad asked me if I could buy an O-ring as he needed one. The situation is as follows, the water drainage has a cup (diameter 9 cm) which seals the sewer air from the environment. It broke so it started to smell, and we all know the sewers are nasty…   A couple months ago I bought myself a Creality ender 5 3D-printer. Mainly to support my maker hobbies, but maybe covid-19 accelerated this quite expensive purchase. I recently had some severe stringing issues using the stock hot end, therefore I upgraded to a direct-drive setup. Due to lower retraction settings, the stringing issues were solved. One of the main advantages of this upgrade is being able to print flexible filaments. Although, not my main reason, this was the perfect excuse for myself to buy some flexible filament. Since my dad wanted to replace 2 and have a few backup, I suggested to print them using my 3D-printer.  Googling a O-ring of 9 cm diameter, the costs were about ~€2,50- a piece, requiring 6 of them totaled ~ €20,- including shipping. I realized it should be easy to print an O-ring for much less. It was time for some more in-depth research.   The internet (theory)   I am a huge fan of the internet, you type in a few keywords in google and you get loads of information.   So the search started with googling TPU filament, and the first hit was a post from www.all3dp.com, which I quite like. Their posts are quite neat, comprehensive and a overall good read. I read a small part about TPE’s which TPU is a subclass of TPE. Due to the huge popularity and success of TPU, TPE faded into the background, hence I didn’t concern me over these materials anymore.  Now I needed to check a few things whether it was possible to print it with my machine. Mainly I was concerned about the printing temperatures and adhesion. I needed the following requirements,   Requirements      Nozzle temperature: &lt;285 °C (limited by hot end)   Warping: Minimal   Shrinkage: Minimal   Flexibility: Very high   Cura profile   Amazon available   In order to have a successful print the material should show low warping and shrinkage, this makes it easier and more fault-tolerant. Flexibility speaks for itself here… And to accelerate the time for product a pre-configured Cura profile by the manufacturer or other makers is highly preferred. Lastly, if possible I should be able to buy it from Amazon, as the shipping with prime is free and saves me money.   TPU brands   One of the things I have learnt the hard way is to never go for the cheapest filament. I would not say the cheaper filaments are bad, but you pay in your time of setting it up and calibrating it. Hence my preference for an available print profile.   The article discussed the following series of TPU’s,      MatterHackers Pro   NinjaTek NinjaFlex   NinjaTek Cheetah   NinjaTek Armadillo   Fillamentum Flexfill   PolyFlex   SainSmart   All with varying properties, the main important parameter for me here was the hardness. All of them were such that they are decent flexible filaments, this can be seen by the elongation at break.      Another interesting filament was colorFabb’s varioshore. By changing the print settings one could tune the flexibility of this material. Its principle of working is, there is an additive in the filament which expands as a gas and introduces bubbles into the material. High school chemistry tells that the hotter one warms up a substance the larger its volume. Using the Ideal gas law,  \\(\\mathrm{PV}=n\\mathrm{RT}\\) with P the pressure, V the volume, n the amount of substance, R the gas constant and T the temperature. These pore (gas bubbles) sizes determine then the flexibility of the final print.   Although very interesting it brings in many parameters to be tuned and would only complicate the design of this simple element. And therefore require more time. It is not too expensive for  ~€50,- a 800g spool.   Amazon   Well looking at amazon.de, I didn’t get much to choose from. A quick search only gave a few smaller brands and SainSmart all3dp was quite positive of this filament. Looking up this filament I found that they had a Ender 3 Cura profile, considering the similarity between Ender 3 and 5 I knew I could take this profile and just use it with little tweaking and I was SOLD. It was cheap too and orange :).      What now?   Well I will design a very simple ring in Autodesk Fusion360 and hopefully swapping out the filament will be easy. I might wait for my backup nozzles and separate my nozzles to  their material type. So nozzles X only for PLA, nozzle Y for PETG and nozzle Z for TPU. To be continued….   Resources  ","categories": ["3D-printing"],
        "tags": ["first time","standard"],
        "url": "https://shikon.github.io/3d-printing/printing-orings/",
        "teaser": null
      },{
        "title": "Drawing O-rings for dad aka printing O-rings for dad part 2",
        "excerpt":"Practicalities…   While waiting for my Sainsmart 3D TPU filament to arrive, I still needed some other parts before I could start the printing. That is a CAD drawing of such O-ring. I thought I would finish this in a couple of minutes, I mean how hard could it be? I simply draw a ring and that’s it. Always, in practice or in reality if you want, it does not come easy. At least if you are unexperienced, things you know how to, well… you know how to. Therefore they are easy :).   O-ring or square-ring?   First I started with two circles, and then you would extrude it up a little to get a 3D part. Circles are 2D as they “live” in a plane. If you could pull it up well then you would end up with a sort of squished cylinder and it becomes 3D! Something like below. But then I realized in my situation I would prefer not to have 2 “flat” sides. Which ends up to be more of a square ring.    To mimic a real O-ring both sides would’ve have been well round and like a circle, but this is unpractical for a 3D-printer. Since it prints on a flat surface, one side eventually ends up flat. Therefore, it would be stupid to draw it round. Well you could try, but that would mean the following printed layers have to “fly”. This is called overhang and while it allows for some I might as well just draw it flat as in my use case it would be perfectly fine.   The previous method was not what I wanted exactly, as I end up with 2 flat surfaces, well my next method was to draw a circle and cut it in half, let this rotate over an axis that such far away it is equal to the inner radius I want ~4.5cm. So I start of drawing a circle in the origin…. This was a bad plan. Somehow I could not move it, well because fusion fixes/constraints it to the origin. After some googling I found this out, and it was suggested to remove this constraint, however trying to do this didn’t help. I gave up and just drew another circle but not taking the origin at the center of the circle. I ended up with something that looked quite decent.      Oh I also added some fillets, what are those? Well those nice roundings, at the left and right corner. Ah remember what I said about not being able to print flying things? Yeah maybe the overhang angle is a bit too aggressive. Also maybe I want it to be a bit thicker, lets add a square to the bottom. Here we go.      Now we move it away from the origin ~4.5 cm and revolve and we end up with something that is looking promising.      What now?   Well I exported the file as a STL, next I will set the Cura profile and slice it and test both “O-ring” designs. The one with fillets and one with a square. Also I designed the width of the O-ring to be 5 mm, from the CAD program it seems to be a bit too wide. I just randomly chose this as it seemed to be quite okay. But I might redesign it for 4 mm, or smaller. As I am a real fusion360 noob, I do not know how to make it parametric. That means I tell the program, that the things I draw can be varied, and just changing this number somewhere in the program which I do not know yet. I can easily adjust various dimensions of the object. Some important parameters here would be: inner diameter, width and height. That is the next thing to learn.   PS   Oh since probably nobody reads this blog yet, I am not going to bother yet/I do not know how I am going to implement this. But these files can be made available, for now just shoot me a mail!  ","categories": ["3D-printing"],
        "tags": ["first time","fusion360","CAD tool"],
        "url": "https://shikon.github.io/3d-printing/drawing-orings/",
        "teaser": null
      },{
        "title": "Designing a Nixie HV supply part 1",
        "excerpt":"Backstory   Well basically the backstory is the introduction but shht :). Recently I designed a small PCB with an analog switch for my internship project. This made me remember, I still have to finish my PCB I was doing for my nixie tube clock. Don’t know what those are? Well, here is an example:      I noticed that a huge area was taken by the high-voltage (HV) supply. It is a NCH6100HV, which I bought a couple years ago… The voltage is changeable by a potentiometer, great to experiment with. I was motivated to make it smaller but not only that. During the previous design process, I noticed creating your supplies is something any electronics project is needed. In my case I couldn’t use the very efficient switch-mode power supplies (SMPS) on my small analog switch PCB, as these typically have a lot of switching noise. They would be ideal as you can easily go up in voltage (boost) or down (buck). This made me intrigued but I couldn’t spend time to explore this. Well, during my New years break however, that means project time!   Interwebs, a gold mine   I remember few years ago reading about these supplies being made by hobbyist. So I re-googled these projects and they became a great resource for my nixie tube HV supply. I mainly used these resources:      de Smith focusses mainly on layout   Jan Rychter focusses on general design specifications   0x7d includes some general information about a few working principles of SMPS   Having scanned over these great projects it was time to dive into the theory.   Working principle of SMPS   The goal is to create a DC high-voltage supply from a lower voltage supply.  Just like climbing a mountain going up is a bit more difficult than going down. An example, a bad one however, is to create a lower voltage is using a so called voltage divider. If the load isn’t too heavy its fine but due to the fixed output impedance of the resistive ladder it will be easily disturbed by its load.    From wikipedia, here \\(V_{out}=\\frac{Z_2}{Z_1}V_{in}.\\)   But the question was how to go up. Well the most common way to step up a DC voltage is to use a boost configuration and is in its simplest sense the following circuit.      The MOSFET acts as an on/off switch. Initially it is switched on, a certain current will set. When it is switched off, the current has less “way” to flow. The only path is to go through the diode and capacitor.  Basically the impedance to the right of the inductor has increased, the current want to decrease. However the inductor tries to counter this, the magnetic field it built up doesn’t want to change. It will increase the voltage to keep the current the same.  Ohm’s law with impedance (\\(I = V/Z\\)) tells, to keep I the same for larger Z we need to increase V. Indeed the constitutive relation of an inductor, \\(V=-L\\frac{\\mathrm{d}I}{\\mathrm{d}t}\\), tells for decreasing current \\(\\frac{\\mathrm{d}I}{\\mathrm{d}t}&lt;0\\) , there is a positive voltage, two voltage sources in series add up. This charges the capacitor to higher voltages than the input. In order to prevent the charge from flowing back -which is required to build a higher output voltage- a diode is required.   How do we determine the output voltage?   The output voltage is simple for continuous mode (CCM) and more complex when the converter is in discontinuous mode. Discontinuous mode (DCM) commonly occurs under light loads, as the current is low and quickly falls off to zero.  In CCM it is determined solely by the duty cycle (D&lt;1), \\(V_{out}=\\frac{V_{in}}{1-D}\\). As said before in DCM, it is more complex and determined as well by the inductance, the load and switching frequency\\(\\left(V_{out}=\\frac{1+\\sqrt{1+\\frac{4DR_{load}}{2Lf}}}{2}\\right)\\).   CCM VS DCM   Although DCM seems more complex, due to the feedback of DC-DC boost controllers, the design is actually easier. All you need to set the output, is to sense the output. For CCM you need to ensure the current through the inductor doesn’t fall to zero. However in DCM the inductor fully cycles in current levels and therefore leads to higher peak currents. These higher peak currents require higher component ratings, lead to decreased lifetime and power efficiency.   But first…   I didn’t want to repeat existing designs, that I could just copy from the internet or datasheets. I went out to research different topologies. You will find typically find the following DC-DC converter topologies.                  Topology       Characteristics       Advantage       Disadvantage                       Boost       Go up in voltage       most simple       efficiency by simplicity                 SEPIC       Go up and down in voltage       non-inverting       complexity                 Buck-boost       Go up and down in voltage       can go down in voltage       inverting                 Ćuk       Go up and down in voltage       continuous current       inverting           The Ćuk topology was intriguing as it could nicely operate in CCM mode, however it was inverting requiring even more components than boosts. The others only added going down in voltage which would be handy in applications which are for example battery powered. Here you start with larger voltage, this decreases over time and you need to switch from going down in voltage to going up. This then requires your topology to support both conversions.  But in my case this is unnecessary as it will be powered from a wall adapter and step up to very high voltages.   What then?   Well I don’t dislike reading papers so I just googled and came across so called charge pumps the research community really like these as these can have very high efficiencies and don’t require inductors such as in the boost topology. For more info on these click here. Sadly, this topology would require a lot of stages in order to boost 12 V to 180 V, although not a problem when doing an integrated design. I am building a PCB with discrete components and needing tens of capacitors is non-ideal.   Is all hope lost?   Do I have to settle with the regular boost topology? I guess. It is very simple and I like simple things, as even the simple things can turn out to be difficult. So Keep It Simple Stupid (KISS). The main element in boost converters is the inductor, there are typically 2 versions. The non-isolated (see Jan Rychter) and isolated version (0x7d). The isolated version uses an transformer and doing this has many advantages. It separates the input circuit and output circuit, however note that the ground is still common. But the intrinsic gain transformers can have is much more interesting for me. Since the power in these converter is going to be below 20 W. Those don’t really require galvanic isolation. The intrinsic gain relaxes various design parameters. The gain of the DC-DC converter is relaxed. Stepping up 12 V to 180 V requires a gain of 15 and this means in CCM mode requires a duty cycle of ~93%. This raises a few issues, boost controllers have a minimum on/off time, a minimum frequency and a maximum duty cycle. Lets have a look into this.   Math?!   Well yeah to do some good engineering, math always plays game. But that will be for part 2.   ","categories": ["electronics"],
        "tags": ["PCB","CAD","design","project"],
        "url": "https://shikon.github.io/electronics/a-pcb-design/",
        "teaser": null
      },{
        "title": "Automating jekyll build and github hosting",
        "excerpt":"Backstory   As people might have noticed this website runs on jekyll, which is code that creates static websites. Great for my simple blogging use. The easiest way for me to get this nice skin working on github pages was to use their remote theme function. However, letting github compile the website leads to some limitation such as plugin use. In order to futureproof myself (files come and go…) I would rather compile it locally and make only use of github’s free hosting.   Googling a solution   Google is my friend, apparently people compile Jekyll locally, mainly for unsupported plugin.  Therefore I searched using the following keywords “Jekyll static github pages with unsupported plugins” and came along Dani’s nice write-up. Unfortunately, his method on how to update the website didn’t work for me, and is probably due to the lack of my understanding of how git works. I did follow the preceding steps in his guide.  However this lead me to a much better solution which automates a great deal and makes it as easy as a single push of a button ;).  Browsing the internet a bit more I came across Surdu’s script, which made life easier.   Working out the details   The goal is to enable static webpage hosting on github. And also try to make this as effortless possible.  That is so I can focus my time on my projects and not the nitty gritty.   At the end you will have achieved the following.      Keep files in 1 repository, this makes sense as they belong together   Store website files in the branch “head”, as github will interpret this to the website files under yourname.github.io   Store source files in the branch “source”   Pushing your new posts will recompile the website and update your webpage accordingly   I will assume you understand:      Basics of git, at least how to set it. Such you can send git commands in the terminal   Have jekyll already installed and working. If not see for example this.   Basic use of unix   Use the bundle command to compile your jekyll website   Separating by branching   In order for github to correctly interpret your files.  We should push the compiled files (defaults to _site -inside-) to our head branch. All other files are pushed to our source branch. To achieve this do the following. In your repository folder which is also the main jekyll folder now root,      Put _site/ in the .gitignore file   git checkout source, push and git checkout master. Compile the website bundle exec jekyll build.   cd _site and touch .nojekyll this prevents github to compile   Go back to root, backup all files and remove everything inside except the .gitignore file.   Copy everything inside _site -which you backed up- to root and push. Delete _site.   git checkout sources and copy everything back (not _site, should be removed) and push. Now github will display your locally compiled website. While your source files are inside the source branch.   ‘*’ a push entails, easily,   git add . git commit -m 'commit message' git push   Script for updating   The complex workflow noted by Dani didn’t work out and I am lazy. So we are going to automate the flow of updating the website and updating our branches accordingly. This script is based on Surdu’s script, but first.           Create a file “pre-push” nano root/.git/hooks/pre-push            With the following content       #!/bin/sh # This script assumes the master branch is the website therefore all compiled files should be in master branch # the source branch holds all your files, please put &lt;_site/&gt; in your git.ignore file     # If any command fails in the below script, exit with error set -e     # Set the name of the folder that will be created in the parent # folder of your repo folder, and which will temporarily # hold the generated content. temp_folder=\"_source-temp\"     # Make sure our main code runs only if we push the master branch if [ \"$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)\" == \"source\" ]; then \t# Store the last commit message from source branch \tlast_message=$(git show -s --format=%s source)     \t# Build our Jekyll site \tbundle exec jekyll build     \t# Move the generated site in our temp folder \tmv _site ../${temp_folder}     \t# Checkout the gh-pages branch and clean it's contents \tgit checkout master \trm -rf *     \t# Copy the site content from the temp folder and remove the temp folder \tcp -r ../${temp_folder}/* . \trm -rf ../${temp_folder}     \t# Commit and push our generated site to GitHub \tgit add -A \tgit commit -m \"Built \\`$last_message\\`\" \tgit push     \t# Go back to the source branch \tgit checkout source else \techo \"Not source branch. Skipping build\" fi                    chmod +x root/.git/hooks/pre-push            Add your new files and recompile by doing a push in root.       End   If anything is unclear or not working don’t hesitate to leave a comment (if it works).  ","categories": ["programming"],
        "tags": ["automating","server","design"],
        "url": "https://shikon.github.io/programming/automating_jekyll/",
        "teaser": null
      },{
        "title": "Creating a custom PCB business card with EAGLE",
        "excerpt":"An idea   I have looked into making my own business cards multiple times. They would be useful to carry with you just in case. However I never came up with something unique that would be nice and presentable on a piece of nice luxury paper. However, while browsing for ideas, I did find nice examples which replaced the paper for a PCB.  This was really cool, however doing PCB designs weren’t a thing I was able to do a couple years ago.  Now I recently got more experienced with it and I am about to graduate, it was a perfect time to do my own design.   What do I want?   I want this business card to be cool, and somewhat useful. I like products that have had a clear thought process beforehand. So I would say,      Same size as typical business card.   Cool, design features impossible on typical paper business card.   Useful, lets say I give this card to a recruiter. It would be a nice reminder having talked with me. Improving my chances of getting the job I want.   Simple but also unique showing the creativity needed to do engineering designs.   How?   First I started by collecting ideas and I saw some very unique PCB cards. For example, example 1 or example 2. I like simple things so the card in example 1, however very useful is too “busy”. Example 2 does a much nicer job of being “peaceful” and concise.   QR-code generator   I really liked the QR-code in example 1, so I also wanted that in my design. I found out it is quite difficult to find a nice QR-code generator just googling “QR-code generator”. Either you had to pay or it was in JPEG, which means scaling it could become pixelated. Adding “github” to the search terms led me to the project of nayuki, a nice open-source QR-code generator, this person even hosts it on their website so I don’t even need to compile it for my use!   Stock icons   I think adding icons are visually pleasing and is straight to the point. So instead of “just” putting my email on the card, I want to prefix it with an icon. Since I don’t want to reinvent the wheel, I looked for these basic icons such as email, phone, LinkedIn and blog. Since I want to use this professionally I had to make sure I wasn’t stealing these icons, so I opted to use the site which had the icons under CCA 4.0, which I downloaded and imported into the PCB design software as-is.   EAGLE a PCB design software   A simple to use PCB software, from the same company of fusion 360 where I design my 3D-models for a 3D-printer. In order to keep everything scalable, I use vector images which can then be converted using the open-source tool by Gordon Williams. The SVG files are put together in inkscape and then converted to EAGLE commands that draws the equivalent inside the EAGLE schematic.   Why (engineering notes)   The core theme of the card is the large balance scale visible at the bottom, in my opinion engineering is all about making decisions and balancing (see what I did here?) their pros and cons. In order to design complex systems you can’t optimize every parameter isolated, as it is typically balanced-out/influenced by another parameter. Not to mention that time is not infinite and is a very critical parameter for companies known as time to market. The only solution is to make informed choices which can only be achieved by experience of others or yourself. Me gaining experience in various fields and sharing this is the ultimate goal of this blog.   The scale, is built from drawing the scale in a metal layer, and keeping the background blank. Creating contrast in depth and forming the scale.   Continuing, in the scale you will find 2 QR-codes, LinkedIn (left) and this blog (right). I opted to use large amount or error correction, since I knew I would put an image inside the QR code and the inaccuracies of silkscreen could influence the readability of the code. This did greatly increase the size of the QR-code, however I was not heavily constrained in useable area. Some people instead sue a NFC chip to forward their websites, however I did not find the added complexity of soldering a chip and using the whole back for the antenna worth conveying something that can be easily achieved with a QR-code. Also is cheaper and more likely to be used as there are more smartphones with a camera to read the QR-code than smartphones with a NFC-chip.   It also features a paperclip, this is one of the features I wanted to add. Because, I can imagine that recruiters are people who might want to deal with a paper-CV during an interview. A paper clip would be great to hold it together.   On the back, as main theme the sumo wrestler doing their brand move and is what inspired me to call the website “shiko”, the name of this move. The sun is created by drawing a circle and the rays by rotating a single ray over 360 degrees and is cut to fit within the card.   The feature for the back is a ruler, could come in handy. It was relatively concise and created with this tool.However was not dimensionally accurate so I had to manually resize it to fit.   Finally, when manufacturing this PCB I wanted it to feel professional and luxurious, I found that 0.8 mm thick PCB fit this, with a gold finish (ENIG).   The end of this journey   Did I learn a lot? Yes I did.   I think I used EAGLE in ways it wasn’t meant to be, but it all worked fine and showed me the limitations (no built-in support to import SVG images) but also the possibilities (a PCB design with no electrical components!).   I hope this post now motivated you also to create your own awesome PCB business card!     ","categories": ["electronics"],
        "tags": ["PCB","CAD","design"],
        "url": "https://shikon.github.io/electronics/designing_business_card/",
        "teaser": null
      },]
