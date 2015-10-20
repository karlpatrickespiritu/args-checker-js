var chai = require('chai'),
    expect = chai.expect,
    should = chai.should,
    args = require('../src/args-checker').args;

describe('args-checker', function () {
    describe('expect', function () {
        it("should throw an ArgumentException: No arguments passed", function () {
            var ArgumentException = null;
            var run = function() {
                ArgumentException = args.expect();
            }
            expect(run).to.throw(ArgumentException);
        })
    })
})
