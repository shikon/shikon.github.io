---
title: "Automatic restart ESP8266 with ESP easy"
toc: true
toc_sticky: true
header:
  image: https://raw.githubusercontent.com/shikon/cloudimg/master/typora/background_fan.jpg
excerpt_separator: "<!--more-->"
categories:
  - programming
tags:
  - Smart Home
  - ZigBee
---

# A smart home with issues

Recently, I had the issue where my ZigBee network would die every few days. After a lot of debugging and even re-pairing of all my devices, I came to the conclusion my ZigBee coordinator is nearing the end of its life. Strangely enough, if you restart the device it will work... for a few days. Hence, a quick and dirty fix is to restart the device every day. This is not a solution to the problem, but in case of buggy software or just hardware that is not working well can be a temporary solution. 

# CC2531 ZigBee with ESP8266 as wireless coordinator

In my case the CC2531 which is my ZigBee network coordinator is connected to an ESP8266 as a serial to wireless bridge. Because of that, I run a piece of software called ESP easy to set this up. In here we can set a rule that will restart the device every x minutes of on time as follows.

## Enable rules in ESP easy

1. To enable rules, go to Tools/Advanced and check the Rules checkbox.
2. Save
3. Refresh the page

## Go to rules and insert the following code

1. Between Devices and Notifications there will be a rules button

2. Click on the rules button to go to that page

3. Insert the following code

   ```
   On Uptime#MUC1_Uptime do
   if [Uptime#MUC1_Uptime]>1440
    Reboot
   endif
   endon
   ```

4. Save

5. ???

6. Profit

You can change 1440 to the number of minutes you want. After this amount of time the device will restart.

# This is not the final solution

At the moment I am designing my own ZigBee USB stick to work with Zigbee2MQTT (Z2M) or Zigbee Home Assistant (ZHA) which both can be integrated in Home Assistant. However due to chip-supply issues the newer sticks based on TI's CC2652P are mostly out-of-stock as of this writing. Therefore, I will try to create a simple design and sell my prototypes in the Dutch market. 