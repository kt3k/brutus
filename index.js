'use strict'

var subclass = require('subclassjs')

var CommandExecutionService = require('./lib/CommandExecutionService')

/**
 * The module interface of Brutus
 *
 * @class
 */
var Brutus = subclass(function (pt) {

    /**
     * @param {Object} options The options
     * @param {String} options.name The name of the command
     * @param {Object} options.options The command options
     * @param {CommandDelegate} delegate The command delegate
     */
    pt.constructor = function (options) {

        if (!(this instanceof Brutus)) {

            return new Brutus(options)

        }

        this.cmdService = new CommandExecutionService(options.name, options.options, options.delegate)

    }

    /**
     * Executes the command as a cli
     */
    pt.execAsCli = function () {

        this.cmdService.executeAsCli()

    }

    /**
     * Executes the command without using cli options.
     */
    pt.exec = function () {

        this.cmdService.execute()

    }

})

module.exports = Brutus
