---
title: "Printing O-rings for dad"
toc: true
toc_sticky: true
excerpt_separator: "<!--more-->"
categories:
  - 3D-printing
tags:
  - first time
  - standard
---

# Backstory

Today dad asked me if I could buy an O-ring as he needed one. The situation is as follows, the water drainage has a cup (diameter 9 cm) which seals the sewer air from the environment. It broke so it started to smell, and we all know the sewers are nasty... 

A couple months ago I bought myself a Creality ender 5 3D-printer. Mainly to support my maker hobbies, but maybe covid-19 accelerated this quite expensive purchase. I recently had some severe stringing issues using the stock hot end, therefore I upgraded to a direct-drive setup. Due to lower retraction settings, the stringing issues were solved. One of the main advantages of this upgrade is being able to print flexible filaments. Although, not my main reason, this was the perfect excuse for myself to buy some flexible filament. Since my dad wanted to replace 2 and have a few backup, I suggested to print them using my 3D-printer.  Googling a O-ring of 9 cm diameter, the costs were about ~€2,50- a piece, requiring 6 of them totaled ~ €20,- including shipping. I realized it should be easy to print an O-ring for much less. It was time for some more in-depth research.

# The internet (theory)

I am a huge fan of the internet, you type in a few keywords in google and you get loads of information.

So the search started with googling *TPU filament*, and the first hit was a post from www.all3dp.com, which I quite like. Their posts are quite neat, comprehensive and a overall good read. I read a small part about TPE's which TPU is a subclass of TPE. Due to the huge popularity and success of TPU, TPE faded into the background, hence I didn't concern me over these materials anymore.  Now I needed to check a few things whether it was possible to print it with my machine. Mainly I was concerned about the printing temperatures and adhesion. I needed the following requirements, 

## Requirements

- Nozzle temperature: <285 °C (limited by hot end)
- Warping: Minimal
- Shrinkage: Minimal
- Flexibility: Very high
- Cura profile
- Amazon available

In order to have a successful print the material should show low warping and shrinkage, this makes it easier and more fault-tolerant. Flexibility speaks for itself here... And to accelerate the time for product a pre-configured Cura profile by the manufacturer or other makers is highly preferred. Lastly, if possible I should be able to buy it from Amazon, as the shipping with prime is free and saves me money.

## TPU brands 

One of the things I have learnt the hard way is to never go for the cheapest filament. I would not say the cheaper filaments are bad, but you pay in your time of setting it up and calibrating it. Hence my preference for an available print profile.  

The article discussed the following series of TPU's,

- MatterHackers Pro
- NinjaTek NinjaFlex
- NinjaTek Cheetah
- NinjaTek Armadillo
- Fillamentum Flexfill
- PolyFlex
- SainSmart

All with varying properties, the main important parameter for me here was the hardness. All of them were such that they are decent flexible filaments, this can be seen by the **elongation at break**.

![varioshore](https://raw.githubusercontent.com/shikon/cloudimg/master/typora/varioshore.jpg)

Another interesting filament was **colorFabb's varioshore**. By changing the print settings one could tune the flexibility of this material. Its principle of working is, there is an additive in the filament which expands as a gas and introduces bubbles into the material. High school chemistry tells that the hotter one warms up a substance the larger its volume. Using the Ideal gas law, 
$$
\mathrm{PV}=n\mathrm{RT}
$$
with P the pressure, V the volume, n the amount of substance, R the gas constant and T the temperature. These pore (gas bubbles) sizes determine then the flexibility of the final print.

Although very interesting it brings in many parameters to be tuned and would only complicate the design of this simple element. And therefore require more time. It is not too expensive for  ~€50,- a 800g spool. 

## Amazon

Well looking at amazon.de, I didn't get much to choose from. A quick search only gave a few smaller brands and *SainSmart* all3dp was quite positive of this filament. Looking up this filament I found that they had a Ender 3 Cura profile, considering the similarity between Ender 3 and 5 I knew I could take this profile and just use it with little tweaking and I was SOLD. It was cheap too and orange :).

![](https://raw.githubusercontent.com/shikon/cloudimg/master/typora/firefox_WbcL291AXV.png)



# What now?

Well I will design a very simple ring in Autodesk Fusion360 and hopefully swapping out the filament will be easy. I might wait for my backup nozzles and separate my nozzles to  their material type. So nozzles X only for PLA, nozzle Y for PETG and nozzle Z for TPU. To be continued....

# Resources