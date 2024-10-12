+++
title = 'ADB Honeypot'
date = 2024-10-12
lastmod = 2024-10-12
draft = false
series = ["Honeypot"]
author = "arbs09"
description = "I ran a ADB Honeypot for 24h. Here is what happend"
keywords = [
    "ADB Honeypot",
    "Docker",
    "Honeypot",
    "How to install Portainer on Ubuntu",
]
tags = [
    "ADB",
    "Honeypot",
    "Docker",
    "Linux",
]
+++
I Found something realy interesting, a ADB Honeypot. I installed it one one of my servers via Docker. Than I waited for 24h.

## Findings

### after 24h

After 24h i logged back into my server and locked at the log data of the honeypot. If you want to take a look:

[adbhoney.log](24h/adbhoney.log)

I analysed the data and here are my findings.

#### Table of connections

ID | IP              | Country | ASN       | Connections | Tot Time (s)  | Avg Time (s)  | Max Time (s)  |
---|-----------------|---------|-----------|-------------|---------------|---------------|---------------|
 1 | 103.205.XXX.XXX | VN      | AS149137  | 1           | 45.3          | 45.3          | 45.3          |
 2 | 157.10.XXX.XXX  | VN      | AS150862  | 3           | 136.2         | 45.4          | 45.5          |
 3 | 198.235.XXX.XXX | BE      | AS396982  | 2           | 0             | 0             | 0             |
 4 | 139.59.XXX.XXX  | IN      | AS14061   | 6           | 2732.2        | 455.4         | 748           |
 5 | 45.200.XXX.XXX  | NL      | AS50580   | 5           | 5.1           | 1             | 1             |
 6 | 154.213.XXX.XXX | DE      | AS51396   | 3           | 136.1         | 45.4          | 45.6          |
 7 | 154.213.XXX.XXX | DE      | AS51396   | 5           | 228.2         | 45.6          | 46            |
 8 | 35.203.XXX.XXX  | GB      | AS396982  | 1           | 182.5         | 182.5         | 182.5         |
 9 | 104.167.XXX.XXX | US      | AS399045  | 5           | 228.3         | 45.7          | 45.8          |
 10| 115.231.XXX.XXX | CN      | AS58461   | 1           | 20.9          | 20.9          | 20.9          |
 11| 172.169.XXX.XXX | US      | AS8075    | 1           | 160           | 160           | 160           |
 12| 167.94.XXX.XXX  | DE      | AS398705  | 4           | 12.7          | 3.2           | 9.1           |
 13| 212.64.XXX.XXX  | TR      | AS197450  | 1           | 45.9          | 45.9          | 45.9          |

#### Analysis

A total of 13 unique IPs contacted my honeypot. The first connection lasted 1h 38min and came from Vietnam. The attacker tried to download and run a script in the temp folder (/data/local/tmp/). I ran the script on virustotal and it says that the script is malware. Only 30 minutes later a new connection came from Vietnam. It also tried to download a script, but it also wanted to kill some processes based on CPU usage. The 3rd just connected and did nothing else, 2 times. The 4th IP came from India and connected 6 times but also never really did anything. The next IP came from the Netherlands and did not send anything. The next 2 IPs came from Germany and tried to download malware to my honeypot 3 times. The 8. IP came from the UK just connected and did nothing.

## Final

So we found out that a lot of attackers trie to abuse ADB Devices.
