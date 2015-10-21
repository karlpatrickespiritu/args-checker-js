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

            expect(run).to.throw(new args.ArgumentException(), /Function arguments must be an instance of a function's arguments./);
        })

        it('should throw an ArgumentException if has no second parameter: Expectations', function() {
            function run() {
                args.expect(arguments);
            }

            expect(run).to.throw(new args.ArgumentException, 'Expectations are required.');
        })

        it('should throw an ArgumentException if second parameter is not an array', function () {
            function run() {
                args.expect(arguments, 123);
            }

            expect(run).to.throw(new args.ArgumentException, /Expectations must be an array of string expectations/)
        })

        it('should throw an ArgumentException if second parameter array of expectations is empty', function () {
            function run() {
                args.expect(arguments, []);
            }

            expect(run).to.throw(new args.ArgumentException, /Expectations are required./);
        });

        it('should throw an ArgumentException if second parameter array of expectations contains data that isn\'t a string', function () {
            function run() {
                args.expect(arguments, ['string', 'object|number', { obj: "an object" }, 321.123])
            }

            expect(run).to.throw(new args.ArgumentException, /Expectations must only contain valid string expectations/)
        })

        it('should throw an ArgumentException if second parameter array of expectations contains a malformed string', function () {
            function run() {
                args.expect(arguments, ['boolean|string', '*', 'ffunction|object', 'number'])
            }

            expect(run).to.throw(new args.ArgumentException, /A malformed string of expectation was detected/)
        })

        it('should throw an ArgumentException if method runs with incorrect number of arguments', function () {
            function run(booleanOrString, anyDataType, functionOrObject, aNumber) {
                args.expect(arguments, ['boolean|string', '*', 'function|object', 'number'])
            }

            expect(function() {
                run(true);
            }).to.throw(new args.ArgumentException, /The number of function arguments does not match the number of expected arguments./)
        })

        it('should throw appropriate ArgumentException depending on what the argument expectations are and arguments passed.', function () {
            function run(booleanOrString, anyDataType, functionOrObject, aNumber) {
                args.expect(arguments, ['boolean|string', '*', 'function|object', 'number'])
            }

            expect(function() {
                run({}, 1, 200, false);
            }).to.throw(new args.ArgumentException, /Argument number 1 must be boolean|string, object was passed./)

            expect(function() {
                run(true, { an: "object" }, 200.00, false);
            }).to.throw(new args.ArgumentException, /Argument number 3 must be function|object, number was passed./)

            expect(function() {
                run(true, { an: "object" }, function() {}, false);
            }).to.throw(new args.ArgumentException, /Argument number 4 must be number, boolean was passed./)
        })

        it('should not throw exceptions if arguments not valid, but should return an object in the callback function containing error information.', function () {
            (function run(booleanOrString, anyDataType, functionOrObject, aNumber) {
                args.expect(arguments, ['number', 'string', 'function', 'number|object'], function(results) {
                    expect(results).to.be.object;
                    expect(results).have.keys(['errors', 'passed'])
                })
            })({}, 'a string', function() {}, [1, 2, 3]);
        })
    })
})
