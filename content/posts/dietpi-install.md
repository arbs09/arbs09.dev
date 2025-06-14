+++
title = "simple Install of Dietpi on a Raspberry Pi"
date = 2024-05-10
draft = false
[extra]
lang = "en"
+++

First, go to dietpi.com and download the latest image for your Raspberry Pi. Then, if you don't already have it, download Balena Etcher [Balena Etcher](https://etcher.balena.io/). Now, plug an SD card or USB drive into your computer. **Please make sure to back up all important data, as this will wipe the disk.** You can then flash the newly downloaded image onto an SD card or USB drive. Once the drive is ready, you can unplug it and connect it to the Raspberry Pi. Finally, you can provide the Raspberry Pi with power and an Ethernet connection. Then you can SSH into the Pi using:

```bash
ssh root@<IP-Adress of your RPI>
```

If you are asked for a password, it probably is.

```bash
dietpi
```

Now you have dietpi installed on your Raspberry Pi.
