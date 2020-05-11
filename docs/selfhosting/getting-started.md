---
title: Getting Started
description: A guide to get Cakebot set up on a computer of your choice.
---

:::info

This guide is still a work-in-progress and is not complete.

:::

First, you will need to install [Python](https://python.org/downloads/).

Once you have done that, you will need to download a stable Cakebot release.
See the <a href="/downloads/" target="_blank">downloads</a> page - just select the file for your operating system.

Next, extract the downloaded file into a folder.

On Windows, you can right click the file and select the `Extract All` option.

On macOS, you can simply double-click the file, and the built-in unarchiver will do the rest.

On Linux, you will need to run `tar xsf thefile.tar.gz` in a terminal.

## Installing Dependencies

Next, you need to install the dependencies the bot needs to work.

Start off by opening your system's terminal. You will need to open the directory that you just extracted the files to.
See the 'Working With Directories and Files' section of [this](https://www.howtogeek.com/140679/beginner-geek-how-to-start-using-the-linux-terminal/) article.

Once you have navigated to the directory containing the files, you will want to run the command:

```shell
python -m pip install --upgrade --user -r requirements.txt
```

:::warning If you are on Linux or macOS

Use `python3` instead of `python`.

:::

## Creating the Database

Next, you will need to create the database. To do so, run:

```shell
python main.py initdb
```

(Keep in mind the warning from above!)
