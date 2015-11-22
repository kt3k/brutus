'use strict'

var minimist = require('minimist')
var subclass = require('subclassjs')

/**
 * UserCliOptions model represents the cli options.
 *
 * @class
 */
var UserCliOptions = subclass(function (pt) {

    pt.constructor = function () {

        this.options = minimist(process.argv.slice(2))

    }

    pt.get = function () {

        return this.options

    }

})

module.exports = UserCliOptions
