# Redis Wrapper

This resource is a simple wrapper for [FiveM](https://fivem.net/). It's running with Redis

## Instalation

1. Download the [latest release](https://github.com/jet2tlf/redisdb/releases/latest).
2. Add the following lines to your server config:
```
set redisCredentials "redis://user:password@localhost:6379/0"
start redisdb
```
3. Set your host

## Params

```key/s(*)``` is the key or keys that you want to use in the query, if you want to use more than one key you have to use an array of keys.

```values(depending)``` is the value or values that you want to set in an entry, if you want to use more than one value you have to use an array of values.

```callback(optional)``` is the function that will be called when the data or function is finished, if the callback is not specified the query will be executed and it will be as an await function.

## Examples

Set

```lua
local result = exports["redisdb"]:set("backpack", "blue"); -- OUTPUT: OK
```

Update

```lua
local result = exports["redisdb"]:update("backpack", "red"); -- OUTPUT: OK
```

Get

```lua
local result = exports["redisdb"]:get("backpack"); -- OUTPUT: red
```

Delete

```lua
local result = exports["redisdb"]:del("backpack"); -- OUTPUT: OK
```

Flush

```lua
local result = exports["redisdb"]:flushDb(); -- OUTPUT: OK
```

Exists

```lua
local result = exports["redisdb"]:exists("backpack"); -- OUTPUT: OK
```