var chai = require('chai'),
    expect = chai.expect,
    should = chai.should,
    args = require('../src/args-checker').args;

describe('args', function () {
    describe('expect', function () {
        it('should throw an ArgumentException if method has no parameters', function () {
            function run() {
                args.expect();
            }
            expect(run).to.throw(new args.ArgumentException());
            expect(run).to.throw(/Function.arguments is required./);
        })

        it('should throw an ArgumentException if first parameter is not a type of Function.arguments', function () {
            function run() {
                args.expect(123.1233);
            }
            expect(run).to.throw(new args.ArgumentException());
            expect(run).to.throw(/Function arguments must be an instance of a function's arguments./);
        })

        it('should throw an ArgumentException if has no second parameter: Expectations', function() {
            function run() {
                args.expect(arguments);
            }
            expect(run).to.throw(new args.ArgumentException);
            expect(run).to.throw(/Expectations are required./);
        })

        it('should throw an ArgumentException if second parameter is not an array', function () {
            function run() {
                args.expect(arguments, 123);
            }
            expect(run).to.throw(new args.ArgumentException);
            expect(run).to.throw(/Expectations must be an array of string expectations/);
        })

        it('should throw an ArgumentException if second parameter array of expectations is empty', function () {
            function run() {
                args.expect(arguments, []);
            }
            expect(run).to.throw(new args.ArgumentException);
            expect(run).to.throw(/Expectations are required./);
        });

        it('should throw an ArgumentException if second parameter array of expectations contains data that isn\'t a string', function () {
            function run() {
                args.expect(arguments, ['string', 'object|number', { obj: "an object" }, 321.123])
            }
            expect(run).to.throw(new args.ArgumentException);
            expect(run).to.throw(/Expectations must only contain valid string expectations/);
        })

        it('should throw an ArgumentException if second parameter array of expectations contains a malformed string', function () {
            function run() {
                args.expect(arguments, ['boolean|string', '*', 'ffunction|object', 'number'])
            }
            expect(run).to.throw(new args.ArgumentException);
            expect(run).to.throw(/A malformed string of expectation was detected/);
        })

        //it('should throw an ArgumentException if method runs with incorrect number of arguments', function () {
        //    function run(booleanOrString, anyDataType, functionOrObject, aNumber) {
        //        args.expect(arguments, ['boolean|string', '*', 'function|object', 'number'])
        //    }
        //    //run(true).should.Throw(new args.ArgumentException);
        //    //run(true).should.Throw(/The number of function arguments does not match the number of expected arguments/);
        //    expect(run(true)).should.Throw(new args.ArgumentException);
        //    expect(run(true)).should.Throw(/The number of function arguments does not match the number of expected arguments/);
        //})
    })
})
