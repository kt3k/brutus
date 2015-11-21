'use strict'

var subclass = require('subclass')

/**
 * CommandOptions model represents the command's default options.
 *
 * @class
 */
var CommandOptions = subclass(function (pt) {

    pt.constructor = function (options) {

        this.options = options

    }

    /**
     * Gets the option object.
     *
     * @return {Object}
     */
    pt.get = function () {

        return this.options

    }

    /**
     * @param {UserPackageOptions} pkgOptions
     * @param {CommandDelegate} delegate The command delegate
     */
    pt.mergeUserPackageOptions = function (pkgOptions, delegate) {

        delegate.mergePackageOptionsToCommandOptions(pkgOptions.get(), this.get())

    }

})

module.exports = CommandOptions
