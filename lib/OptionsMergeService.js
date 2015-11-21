'use strict'

var subclass = require('subclass')

var OptionsMergeService = subclass(function (pt) {

    /**
     * @param {UserCliOptions} cliOptions The user's cli options
     * @param {UserPackageOptions} pkgOptions The user's package options
     * @param {CommandOptions} cmdOptions The command's default options
     * @param {CommandDelegate} delegate The command delegate
     */
    pt.constructor = function (cliOptions, pkgOptions, cmdOptions, delegate) {

        this.cliOptions = cliOptions
        this.pkgOptions = pkgOptions
        this.cmdOptions = cmdOptions
        this.delegate = delegate

    }

    /**
     * Merges all the options
     */
    pt.mergeAll = function () {

        this.pkgOptions.mergeCliOptions(this.cliOptions, this.delegate)
        this.mergePkgAndCmdOptions()

    }

    /**
     * Merges the package and command options.
     */
    pt.mergePkgAndCmdOptions = function () {

        this.cmdOptions.mergePackageOptions(this.pkgOptions, this.delegate)

    }

    /**
     * Gets the result options object.
     *
     * @return {Object}
     */
    pt.getResult = function () {

        return this.cmdOptions.get()

    }

})

module.exports = OptionsMergeService
