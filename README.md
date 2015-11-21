# brutus

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
