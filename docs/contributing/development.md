---
title: Development Guide
description: Welcome to the development guide! This is basically a reference sheet to help you through the process of developing Cakebot.
---

Welcome to the development guide!
This is basically a reference sheet to help you through the process of developing Cakebot!

You will need to install dependencies (see section below) before you can start developing, so your IDE can assist you in development.

## Dependencies

### Installing

> Note: you may want to create a `virtualenv` first. If you want to, see the section below.

Please run this in a terminal:

```shell
make deps
```

If this fails, check that you have [pip](https://pip.pypa.io/en/stable/) installed for your Python version.

### Adding

You can use this format to add any valid [PyPI](https://pypi.org) or [Cakebot](https://rdil.mycloudrepo.io/public/repositories/cakebot) hosted package to our `requirements.txt`:

```python
name-of-package-on-pypi==version
```

### Virtual Environments

Here is how to run the bot in a Virtual Environment (`virtualenv`).

#### What provider should I use?

We require `virtualenv` instead of `pipenv`.

#### Create virtualenv

First, install `virtualenv`.
See [here](https://packaging.python.org/tutorials/installing-packages/) for how to do that.

Then, head to [here](https://packaging.python.org/tutorials/installing-packages/#optionally-create-a-virtual-environment) to learn how to create it and activate it.

#### Activate virtualenv

Run this command:

```bash
$ source virtualenvname/bin/activate
```

## Starting Bot in Development Environment

The bot is built to work primarily on our server, and because of that, some files may need to be adjusted on your computer.

### GitHub API Wrapper

Normally, you will need to not provide a token (used by the `+report` command, and its GitHub API wrapper instance), as we aren't publishing our personal access token for [@RDILBot](https://github.com/RDILBot) for security reasons.

If you really must use it (e.g. for testing), follow [this guide to creating a personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line#creating-a-token) (make sure you add `gist` and `repo:public_repo` permissions at the very least), then paste the generated token into the "github" field of the "tokens" object in your `config.json`.

### Discord

You will need to create your own bot [here](https://discordapp.com/developers) (new application -> build a bot -> create bot) and generate/supply a token (which needs to be pasted into the "discord" value of the "tokens" object in the `config.json` file).

### The Database

:::important
**You should only run this the first time.**
:::

Since we use a database to store some information in, you will need to run this command to create it:

```shell
$ python3 main.py initdb
```

### Running the Bot

We have a custom command-line interface for the bot, and so you will need to run it to launch the bot:

```shell
$ python3 main.py run
```

:::tip
To see more commands that are available via the CLI, you can run `python3 main.py --help`.
:::

---

## Making New Python Modules

When making new Python modules, please keep the following in mind:

1. Please add [copyright header](#copyright-header) to the top of the file _before_ any code.
1. Please put it in the `cakebot` package for organization.
1. Use `UpperCamelCase` to name it.

### Copyright Header

Here is the copyright header we require:

```python
"""
    Cakebot - A cake themed Discord bot
    Copyright (C) 2019-current year  Reece Dunham

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
"""
```

## Python Version

To develop the bot, you **will need** to have a supported Python version installed.

### Production

The bot runs on `v3.8.0` in production, so lower version syntax/features can potentially throw errors.

### Compatibility Policy

The bot currently **does** support:

- CPython `3.7.x`
- CPython `3.8.x`

> **However, we absolutely do not support Python versions older than `v3.6.x`.**

Python `3.6.x` _may work_, but is _not suggested_.

## Diagnosing Errors

### Using [PyCharm IDE](https://jetbrains.com/pycharm/)

Please see [this guide](https://jetbrains.com/help/pycharm/analyzing-external-stacktraces.html) on how to analyze stacks for Python.

### Common Errors

#### Improper token

If the last line of your stack contains `improper token passed`, try these steps:

1. Make _sure_ the line of the JSON for the token specifies the right one.
1. Check if your bot is already running in any other terminals. It can only run one instance at a time.

#### `ImportError`

See [PythonAnywhere's guide on fixing these](https://help.pythonanywhere.com/pages/DebuggingImportError).

## Profiling

If the bot seems to have a performance issue, you can try enabling the profiler to find the issue.

:::note

This does require you to have admin access to the bot (your Discord user ID in the `UserUtil` file).

:::

To start profiling, run the command `start-profiler` in any Discord channel.

The profiler will start analysis in the background.

To end the profiling session and get results, just run `stop-profiler`.

All recorded results will be outputted to the `profile.txt` file.
