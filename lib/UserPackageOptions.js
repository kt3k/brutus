'use strict'

var subclass = require('subclassjs')
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

        this.options = pkgConfig(cmdName, {root: false}) || {}

    }

    /**
     * @param {UserCliOptions} cliOptions The user cli options
     * @param {CommandDelegate} delegate The command delegate
     */
    pt.mergeCliOptions = function (cliOptions, delegate) {

        delegate.mergeCliOptionsToPackageOptions(cliOptions.get(), this.get())

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

module.exports = UserPackageOptions
