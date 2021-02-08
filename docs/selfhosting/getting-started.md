---
title: Getting Started
description: A guide to get Cakebot set up on a computer of your choice.
---

To start with self-hosting you will need the following things:

-   A machine to run the bot on
-   [Node.js](https://nodejs.org) v14 on said machine
-   [Git](https://git-scm.com) on said machine

## Get the bot

First, download the bot's source code. This can be done by running this command in a terminal on the machine you are going to host the bot on:

```bash
git clone https://github.com/cakebotpro/cakebot.git
```

Next, run `cd cakebot` to move the terminal into that directory.

## Building the bot from source

The next step is simple, you need to install the bot's dependencies and build the code.

First, to install the dependencies, just run `npm install`.

If you don't have a proper C compiler installed, then some of the optional modules may not be built.
It will say at the end if this is the case, you will get some scary-looking error messages.
If you do, just run `npm install --no-optional`.

Next, run the build command, which is just `npm run build`.

It should complete without any issues.

## Starting the bot

Lastly, you will need to create a launcher script for the bot.
Please consult the [launcher](launchers) guide.
