'use strict'

var subclass = require('subclass')

var UserCliOptions = require('./UserCliOptions')
var UserPackageOptions = require('./UserPackageOptions')
var CommandOptions = require('./CommandOptions')

var OptionsMergeService = require('./OptionsMergeService')

var CommandExecutionService = subclass(function (pt) {

    pt.constructor = function (cmdName, options, delegate) {

        this.delegate = delegate

        this.cliOptions = new UserCliOptions()
        this.pkgOptions = new UserPackageOptions(cmdName)
        this.cmdOptions = new CommandOptions(options)

    }

    /**
     * Executes the command as a cli.
     */
    pt.executeAsCli = function () {

        var mergeService = this.createMergeService()
        mergeService.mergeAll()

        this.delegate.execute(this.cliOptions.get(), mergeService.getResult())

    }

    /**
     * Executes the command as a node module.
     */
    pt.execute = function () {

        var mergeService = this.createMergeService()
        mergeService.mergePkgAndCmdOptions()

        this.delegate.execute(null, mergeService.getResult())

    }

    /**
     * @private
     * @return {OptionsMergeService}
     */
    pt.createMergeService = function () {

        return new OptionsMergeService(this.cliOptions, this.pkgOptions, cmdOptions, this.delegate)

    }

})

module.exports = CommandExecutionService
