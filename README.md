# brutus v1.0.0

> A tool for creating a cli which uses cli options and package.json options and merge them into default options

# Install

```
npm install --save brutus
```

# Usage

```js
var brutus = require('brutus')({

    name: 'mycommand',
    options: {
        foo: "abc",
        bar: {},
        baz: [100, 200]
    },
    delegate: {

        mergeCliOptionsToPackageOptions: function (cliOptions, pkgOptions) {
            // merge options
        },

        mergePackageOptionsToCommandOptions: function (pkgOptions, cmdOptions) {
            // merge options
        },

        execute: function (cliOptions, cmdOptions) {
            // main process
        }

    }

})

// execute (without using cli options)
brutus.exec()

// execute as a cli command (using cli options)
brutus.execAsCli()
```

# Options

## name: String

The name of the command. This is used as the key of the user's package options.

```json
{
    "name": "users-package",

    "snowball": {
        "foo": "bar"
    }
}
```

If your command name is `snowball`, then the user's package options are `{"foo": "bar"}` in the above example.

## options: Object

The default options for the command.

## delegate: CommandDelegate Interface

Brutus delegates the merging methods and command execution through delegate object.

### mergeCliOptionsToPkgOptions(cliOptions, pkgOptions)

Merges the user's cli options to the user's package options.

### mergePkgOptionsToCommandOptions(pkgOptions, cmdOptions)

Merges the user's package options to the command default options.

### execute(cliOptions, cmdOptions)

Executes the command.
