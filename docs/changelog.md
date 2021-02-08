---
title: Changelog
description: A list of changes for each Cakebot release.
---

## v2 Releases

### v2.1.0

```diff
+ Nicer error messages.
+ iss command works again (releases now contain the required data, making them a lot bigger, but it uses a lot less networking now).
+ Cake giving now has a leaderboard!
- Drop .env support, just define environment variables in your launcher.
+ Hookups now have access to the discord.js Client instance.
+ Added an events system!
```

### v2.0.0

```diff
+ TypeScript rewrite!
```

## v1 Releases

### v2021.01.01

```diff
* Change how a number of internals work
* Move some of the external packages into the main repository
* Update dependencies
- Remove some code in favor of the v2 refactoring
* Updated copyright headers
```

### v2020.10.08

```diff
* More performance improvements
* Make +info into an embed
* Update dependencies
```

### v2020.06.16

```diff
* Various fixes to try to reduce lag
```

### v2020.05.08

```diff
- Disabled the aiohttp sentry integration
* Updated PyGithub to 1.51
* Updated Yappi to 1.2.5
```

### v2020.04.24

```diff
+ Added a profiler so we can find which functions are causing the bot to crash
* Fixed errors being thrown when users just type the prefix
* Internalized the ISS API implementation
```

### v2020.04.15

```diff
* Fixed the new define command hitting rate limiting
+ Added emojis to the info command (it also works again)
+ Added a test for the joke command
+ Added issue templates
* Fixed some dead links
* Updated ptpython from 3.0.1 to 3.0.2
* Moved the joke command to TextCommandsUtil
```

### v2020.04.09

```diff
* Fixed some issues with the new define command
+ Rebuilt the website!
+ Added more tests
* Fixed sponsor link
* Enabled linting on all python files
* Updated discord.py from 1.3.2 to 1.3.3
* Updated sqlalchemy from 1.3.15 to 1.3.16
```

### v2020.04.03

```diff
* We now use IDs for admin detection
* Fixed some issues with error reporting
+ Added repr to users in database
* Upgraded filehandlers to v3
+ Enabled testing in theia
+ Added `make clean` task
+ Ran black
+ Added config schema
```

### v2020.03.27

```diff
* Moved out of the `club/cakebot` package.  We are now just `cakebot`.
+ Added lots of common tasks to the Makefile
+ Rewrote define!
+ Introduction of more static types
* Sorted imports with the isort tool
+ Documented a lot of internal functions for IDEs
+ Added CLI
* Renamed some preconditions
* Fixed bugs with the report and info commands (they should work just fine now)
+ Added say command
- Removed filebootstrap (aka fbootstrap or just bootstrap)
* Moved more common commands to TextCommandsUtil
* Bumped sentry-sdk from 0.14.2 to 0.14.3
* Bumped cchardet from 2.1.5 to 2.1.6
- Ignored flake8 E999 due to false positives in some IDEs
```

### v2020.03.16

```diff
* Updated gitignore
* Updated PyGithub version
* Moved coinflip to TextCommandsUtil
* Cleaned up some code
- Removed unused import
* Fixed the report command
```

### Older

Before March 16th of 2020, we didn't write changelogs. You can still see the changes in the Git history however.
