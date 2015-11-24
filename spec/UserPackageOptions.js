var expect = require('chai').expect

var UserPackageOptions = require('../lib/UserPackageOptions')
var pkgOptions

describe('UserPackageOptions', function () {

    beforeEach(function () {

        pkgOptions = new UserPackageOptions('dummycommand')

    })

    describe('get', function () {

        it('gets the user\'s package\'s `cmdName` property as the options', function () {

            expect(pkgOptions.get()).to.eql({foo: 'bar'})

        })

    })

})
