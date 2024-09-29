+++
title = 'installing pihole on dietpi'
date = 2024-09-29
draft = false
series = ["ultimate pihole"]
author = "arbs09"
description = "How to set up  Pihole - a Network-wide Ad Blocker on dietpi."
+++

## What even is Pihole?

Pi-hole is a network-level ad blocker that acts as a DNS sinkhole. It blocks ads and trackers across your entire network by intercepting DNS requests for known ad-serving domains.

## Why do I even need a Pihole?

There are several reasons you might want to use Pi-hole:

- Network-wide ad blocking: It blocks ads on all devices, including those that don't support ad-blockers (like smart TVs or mobile apps).
- Privacy: It reduces tracking by blocking known tracker domains.
- Performance: Devices may run faster without loading resource-heavy ads.

## What are we doing?

- Setting up pihole on a Raspberry Pi with dietpi

## What are the requirements?

- a Raspberry Pi 4 (or 3 or 5, but in this tutorials i will be using the RPI 4) set up with dietpi

## Getting you Pi setup with on dietpi

After installing dietpi you ssh into your pi. First run 

```bash
apt update && apt upgrade -y
```

after this run

```bash
dietpi-update
```

to get the newest version of dietpi.
After this run

```bash
dietpi-software install 93
```

And now you alredy have pihole set up, you can manage it via 

http://<yourpi.ip>/admin

The Password is the software Password you set up in dietpi (default: dietpi)
