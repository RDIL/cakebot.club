---
title: Launchers
description: How to make your own custom launcher scripts.
---

Cakebot does not provide a command-line interface, to be as customizable as possible. Instead, we require that you, the user, write a launcher script.

## Development launcher

If you are contributing to the repository, you can use the development launcher located in the `launcher.js` file.

## Creating a launcher

The first step to creating a launcher is to create a file, which you can name to whatever you want, with the `.js` file extension.

Next, open the file in your editor of choice and add this base template:

```js
/* eslint-disable */

process.env.DISCORD_TOKEN =
    "PASTE THE DISCORD BOT TOKEN HERE IN THESE QUOTATION MARKS"
// You can also define any of the other environment variables here in the same way.

// Requires
const start = require("./build/index")
const defaultCommandsHookup = require("./build/commands/commands")
    .defaultCommandsHookup

// This is the start call. You should add all your hookups to this array.
// Here in this template, we only add the default commands.
start([
    defaultCommandsHookup,
    // if you want, put any custom hookup functions here
    // or if any plugins instruct you to, put them here also
])
```

## Hookup reference

This is for developers only.

Each hookup recieves the `data` parameter, which has this TypeScript type declaration:

```ts
/**
 * The data passed to each hookup function.
 */
type HookupData = {
    /**
     * The command registry holds all the bot's commands
     * and is checked each message to see if a registered command was run.
     *
     * @see https://github.com/cakebotpro/cakebot/blob/main/src/commands/registry.ts
     */
    commandRegistry: Registry

    /**
     * The discord.js client object.
     */
    botClient: Client
}
```

Hookup functions should return no value. Anything else that you return will be ignored.
