---
title: "Doing a Nixie tube HV supply part (1)"
toc: true
toc_sticky: true
excerpt_separator: "<!--more-->"
categories:
  - electronics
tags:
  - PCB
  - CAD
  - design
  -project
---

# Backstory

Well basically the backstory is the introduction but shht :). Recently I designed a small PCB with an analog switch for my internship project. This made me remember, I still have to finish my PCB I was doing for my nixie tube clock. Don't know what those are? Well, here is an example:

![Meinbergnews](https://raw.githubusercontent.com/shikon/cloudimg/master/typora/xclock_small.jpg.pagespeed.ic.5qBb-pWZkY.webp)

I noticed that a huge area was taken by the high-voltage (HV) supply. It is a NCH6100HV, which I bought a couple years ago... The voltage is changeable by a potentiometer, great to experiment with. I was motivated to make it smaller but not only that. During the previous design process, I noticed creating your supplies is something any electronics project is needed. In my case I couldn't use the very efficient switch-mode power supplies (SMPS) on my small analog switch PCB, as these typically have a lot of switching noise. They would be ideal as you can easily go up in voltage (boost) or down (buck). This made me intrigued but I couldn't spend time to explore this. Well, during my New years break however, that means project time! 

# Interwebs, a gold mine

I remember few years ago reading about these supplies being made by hobbyist. So I re-googled these projects and they became a great resource for my nixie tube HV supply. I mainly used these resources:

[]: https://desmith.net/NMdS/Electronics/NixiePSU.html	"de Smith"

