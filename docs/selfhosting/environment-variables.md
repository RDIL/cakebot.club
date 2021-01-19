---
title: Environment Variables
description: The environment variables that Cakebot uses.
---

## How to use environment variables

To use environment variables, just run a command to set them.
This will be different depending on your platform.

For Windows:

```cmd
set VARIABLE_NAME="some value"
```

For macOS and Linux:

```bash
export VARIABLE_NAME="some value"
```

### Using in a launcher script

If you would like to use environment variables in your launcher script, you can add them as Node.js [`process.env` object property definitions](https://nodejs.org/api/process.html#process_process_env).

For example:

```js
/* eslint-disable */

// You can pick which ones to define, with the exception being DISCORD_TOKEN since it is required.
process.env.DISCORD_TOKEN = "BLAHBLAHBLAH"
process.env.DEBUG = "false"

const start = require("./build/index").start

// other stuff here
```

Keep this in mind though:

- You need to add the `process.env` definitions ***before*** the `require` statement that imports Cakebot,
or it will have the possibility of crashing.

## Environment variables

### `DISCORD_TOKEN`

:::danger Requirement

This variable MUST be defined, or the bot will crash.

:::

The token to log in to Discord with.
This can be found in the 'Bot' section of your application on the [Discord developer portal](https://discord.com/developers).

**Type**: String

**Default**: None

### `DEBUG`

Debug switches debugging on and off. We suggest you keep it off unless you are contributing to the bot.

**Type**: String-literal boolean (`"true"` or `"false"`)

**Default**: `false`

### `BOT_PREFIX`

The prefix for all the bots commands when used on Discord.

**Type**: String

**Default**: `"-"`

### `BOT_STATUS`

The status that the bot displays on Discord.

:::tip Placeholders

You can use the following placeholders in the status:

- `(PREFIX)` - The bot's prefix (see also `BOT_PREFIX`)

:::

**Type**: String

**Default**: `"Run (PREFIX)help"`

### `WORDSAPI_TOKEN`

The token for the [WordsAPI](https://rapidapi.com/dpventures/api/wordsapi) API.

Leaving this as undefined will disable the command `define`.

**Type**: String

**Default**: Undefined

### `GITHUB_TOKEN`

The personal access token (PAT) for the [GitHub API](https://docs.github.com/en/graphql).

Leaving this as undefined will disable the commands `homepage` and `stars`.

**Type**: String

**Default**: Undefined
