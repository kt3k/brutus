'use strict'

var subclass = require('subclassjs')
var Promise = require('es6-promise').Promise

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
     *
     * @return {Promise}
     */
    pt.execAsCli = function () {

        var self = this

        return Promise.resolve().then(function () {

            return self.cmdService.executeAsCli()

        }).then(function (exitCode) {

            process.exit(exitCode)

        }, function (err) {

            console.log(err)
            console.log(err.stack)

            process.exit(1)

        })

    }

})

module.exports = Brutus
