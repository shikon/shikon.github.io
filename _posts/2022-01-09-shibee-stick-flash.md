---
title: "ShiBee stick flashing and teardown"
toc: true
toc_sticky: true
excerpt_separator: "<!--more-->"
categories:
  - programming
tags:
  - Smart Home
  - ZigBee
---

# To make or not to make a shtick

## A recent design of a ZigBee stick

[As mentioned before](https://shiko.nl/programming/espeasy-restart/), I had issues with my old ZigBee stick. Also due to low inventory, because of shortages of the new ZigBee TI CC2652  USB sticks, I took upon myself to design my own. It was a nice pet project because I also wanted to learn Altium designer, while before this I always worked with autodesk EAGLE. The design of this stick is something I also want to share but will be for later.

## Okay I have one, what now?

So the ShiBee stick comes ready with the firmware already flashed on there. Depending on your needs you might want to flash a newer version or the router firmware. Due to the great support of the community [several](https://slae.sh/projects/cc2652/#flashing) [guides](https://electrolama.com/radio-docs/#step-3-flash-the-firmware-on-your-stick) [are](https://github.com/egony/cc2652p_E72-2G4M20S1E/wiki/Flashing-EN) [floating](https://zig-star.com/radio-docs/flash-cc-bsl/) [around](https://circuitsetup.us/product/usb-zigbee-stick-z-stack-coordinator/). However, for good practice that only I can promise a how-to guide can stay available, I will repeat the steps here.

## Flashing of the ShiBee stick

1. Install [python](https://www.python.org/downloads/)

2. Open your python terminal

3. `python --version` check whether it displays >=3.4

4. `pip install pyserial intelhex` dependencies

5. Download the firmware ([coordinator](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin) or [router](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_3.x.0/bin)) with "CC1352", please select the "other" version as it will make sure the LEDs work. The filename is `FIRMWARE`

6. Open device manager if on windows or use `lsusb` and find what name = `PORT`  your computer gave your CH340 usb device. <img src="https://raw.githubusercontent.com/shikon/cloudimg/master/typora/image-20220109181945934.png" alt="image-20220109181945934" style="zoom:50%;" />

7. `python cc2538-bsl.py -p PORT -evw FIRMWARE` In my case `PORT` is `COM5` and my file is renamed to `flash_me_router.zip`. Hence it can look something like this: ![image-20220109182437609](https://raw.githubusercontent.com/shikon/cloudimg/master/typora/image-20220109182437609.png)

8. You have flashed your device, congratz!

   

## Erasing of the ShiBee stick

Sometimes you just want an empty stick in that case just run.
```python cc2538-bsl.py -p PORT -e```

## Clearing NVRAM of the ShiBee stick

Due to the certain procedures in the script some garbage might prevent you from restoring from the coordinator's memory (NVRAM). To prevent this you can use the script available from your zigbee2mqtt installation. 

1. Locate in the zigbee2mqtt folder under `.../scripts` , which typically is `/opt/zigbee2mqtt/scripts `  the `zStackEraseAllNvMem.js` script.
2. `node zStackEraseAllNvMem.js /dev/ttyUSB0` Will clear the NVRAM, note that ttUSB0 is typically the name it gets in Linux OS's such as Raspbian for raspberry pi.

# Tearing down the EBYTE E72 2G4M20S1E

The main 'sub'-component of the board is EBYTE module which houses all the necessary components for the CC2652 chip. However it is covered with a metal shield as you can see. <img src="https://raw.githubusercontent.com/shikon/cloudimg/master/typora/IMG_20220109_141322.jpg" alt="IMG_20220109_141322" style="zoom: 25%;" />

This is done to prevent the antenna's electromagnetic waves from interfering with the components on the EBYTE module. To open it up I took my hot air gun and removed it with a bit of heat. Then we are shown with the following:

<img src="https://raw.githubusercontent.com/shikon/cloudimg/master/typora/IMG_20220109_142224.jpg" alt="IMG_20220109_142224" style="zoom: 50%;" />

I have to say the PCB looks pretty good and the soldering also. I would like to reverse-engineer some small sub-circuits just for curiosity, however I unfortunately do not have a microscope. So I will let this rest. Overall I am quite positive over the module's quality what I can see by eye. Also the virtual render they had on their website is actually pretty close how it looks in real, which is a + for me as I dislike marketing trickery. See [below (taken from)](https://www.ebyte.com/en/product-view-news.html?id=1002)

<img src="https://www.ebyte.com/Uploadfiles/Picture/2020-7-8/202078180423939.jpg" alt="en-E72-2G4M20S1E_03" style="zoom: 50%;" />