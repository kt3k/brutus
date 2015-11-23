'use strict'

var expect = require('chai').expect

var CommandExecutionService = require('../lib/CommandExecutionService')

describe('CommandExecutionService', function () {

    var cmdService

    beforeEach(function () {

        cmdService = new CommandExecutionService('mycommand', {

            foo: 1, bar: "abc"

        }, {

            mergeCliOptionsToPackageOptions: function (cliOptions, pkgOptions) {

                pkgOptions.isCliOptionsMerged = true

            },
            mergePackageOptionsToCommandOptions: function (pkgOptions, cmdOptions) {

                cmdOptions.isPkgOptionsMerged = true
                cmdOptions.isCliOptionsMerged = pkgOptions.isCliOptionsMerged

            },
            execute: function (cliOptions, cmdOptions) {

                return cmdOptions

            }

        })

    })

    describe('executeAsCli', function () {

        it('executes the command using cli options', function () {

            var result = cmdService.executeAsCli()

            expect(result.isPkgOptionsMerged).to.be.true
            expect(result.isCliOptionsMerged).to.be.true

        })

    })

})
