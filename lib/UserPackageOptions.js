'use strict'

var subclass = require('subclass')
var pkgConfig = require('pkg-config')

/**
 * UserPackageOptions model represents the user's package options.
 *
 * @class
 */
var UserPackageOptions = subclass(function (pt) {

    /**
     * @param {String} cmdName The name of the cmd
     */
    pt.constructor = function (cmdName) {

        this.options = pkgConfig(cmdName)

    }

    /**
     * @param {UserCliOptions} cliOptions The user cli options
     * @param {CommandDelegate} delegate The command delegate
     */
    pt.mergeUserCliOptions = function (cliOptions, delegate) {

        delegate.mergeCliOpsionsToPackageOptions(cliOptions.get(), this.get())

    }

    /**
     * Gets the option object.
     *
     * @return {Object}
     */
    pt.get = function () {

        return this.options

    }

})
