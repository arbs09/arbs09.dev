+++
title = "robots.txt honeypot"
date = 2025-04-08
description = "There are some Crawlers out there, wich don't respect robots.txt. This Honeypot wich I made tries to find them and report them."
draft = false
aliases = ["/projects/web-honeypot"]
[extra]
lang = "en"
+++
> robots.txt is the filename used for implementing the Robots Exclusion Protocol, a standard used by websites to indicate to visiting web crawlers and other web robots which portions of the website they are allowed to visit.  
> — [Wikipedia][def]

`robots.txt` allows website owners to control which crawlers can access their site and how they can access it.

However, some bots don't respect the `robots.txt` rules.

To detect this, I created a honeypot that serves a `robots.txt` file disallowing all crawling.  
Bots that ignore this rule are automatically reported to AbuseIPDB.

If you want to check it out, it is available on Codeberg and Github. It is licensed under the MIT License.

[Codeberg Repo](https://codeberg.org/arbs09/robotstxt-honeypot), 
[Github-Repo](https://github.com/arbs09/robotstxt-honeypot)

[def]: https://en.wikipedia.org/wiki/Robots.txt
