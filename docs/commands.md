---
title: Command List
layout: default
redirect_from: /commands/
---

## Basic

| **Command Name** | **Command Description**                      | **Permission Required** | **Parameters** |
| ---------------- | -------------------------------------------- | ----------------------- | -------------- |
| `+help`          | Get the bot help menu                        | Send chat messages      | None           |
| `+invite`        | Get a link to invite the bot                 | Send chat messages      | None           |
| `+ping`          | See if the bot is online                     | Send chat messages      | None           |
| `+info`          | Get some basic info about the current server | Send chat messages      | None           |

## Fun

| **Command Name** | **Command Description**                              | **Permission Required** | **Parameters**             |
| ---------------- | ---------------------------------------------------- | ----------------------- | -------------------------- |
| `+8`             | Ask our magic 8 ball your questions                  | Send chat messages      | Your question              |
| `+joke`          | Get one of the bot's excelent Jokes                  | Send chat messages      | None                       |
| `+iss`           | Get the realtime location of the ISS                 | Send chat messages      | None                       |
| `+slots`         | Play some slots without having to head to a casino!  | Send chat messages      | None                       |
| `+coinflip`      | Flip a coin.                                         | Send chat messages      | None                       |
| `+clapify`       | Add claps in between each word in the given word set | Send chat messages      | The phrase to add claps to |
| `+say`           | Have the bot repeat what you say.                    | Send chat messages      | What the bot should say    |

> An example of clapify:
> `+clapify its wednesday my dudes`
> will output "its :clap: wednesday :clap: my :clap: dudes"
>
> _Note_: spamming `+slots` will cause lag for the bot.

### Cookies

With Cakebot, you can give users you like cookies. They are reflected across Discord and will have a leaderboard soon.

| **Command Name** | **Command Description**              | **Permission Required** | **Parameters**         |
| ---------------- | ------------------------------------ | ----------------------- | ---------------------- |
| `+cookie give`   | Give a cookie to the mentioned user  | Send chat messages      | The person (@tag) them |
| `+cookie bal`    | Get the number of cookies a user has | Send chat messages      | The person (@tag) them |

## Educational

| **Command Name** | **Command Description**        | **Permission Required** | **Parameters**            |
| ---------------- | ------------------------------ | ----------------------- | ------------------------- |
| `+define`        | Define a word through WordsAPI | Send chat messages      | The word you want defined |
| `+pi`            | Get the first 123 digits of Pi | Send chat messages      | None                      |

## Help

| **Command Name** | **Command Description**                                                         | **Permission Required** | **Parameters**            |
| ---------------- | ------------------------------------------------------------------------------- | ----------------------- | ------------------------- |
| `+report`        | File a support ticket with the developers (request features, report bugs, etc.) | Send chat messages      | The message for the team. |

## GitHub

| **Command Name** | **Command Description**             | **Permission Required** | **Parameters**                             |
| ---------------- | ----------------------------------- | ----------------------- | ------------------------------------------ |
| `+stars`         | Get the star count for a repository | Send chat messages      | The repository (e.g. `cakebotpro/cakebot`) |
| `+homepage`      | Get the homepage for a repository   | Send chat messages      | The repository (e.g. `cakebotpro/cakebot`) |
