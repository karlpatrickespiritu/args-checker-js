/**
 * A lightweight arguments checker in javascript.
 *
 * @author karlpatrickespiritu <https://github.com/karlpatrickespiritu>, <wiwa.espiritu@gmail.com>
 */
var args = (function () {

    "use strict";

    // TODO: git pages docs
    var gitPagesRepo = "http://www.github.com/karlpatrickespiritu/args-checker-js";

    /**
     * Checks the arguments and expectations if valid
     * @param {Array}
     * @param {Array}
     * @param {mixed}
     */
    function expect(functionArgs, expectations, callback) {

        var functionArgs = functionArgs || false,
            expectations = expectations || false,
            callback = callback || false,
            results = {};

        /*==== some basic checks =====*/

        if (functionArgs === false) {
            throw new ArgumentException("Function.arguments is required. \n\nFor more info, go to " + gitPagesRepo + "#Function.arguments");
        }

        if (functionArgs.constructor !== Object) {
            throw new ArgumentException("Function arguments must be an instance of a function's arguments.\n\nFor more info, go to " + gitPagesRepo + "#Function.arguments");
        }

        if ((expectations === false) || (expectations.length < 1)) {
            throw new ArgumentException("Expectations are required.\n\nFor more info, go to " + gitPagesRepo + "#expectations");
        }

        if (expectations.constructor !== Array) {
            throw new ArgumentException("Expectations must be an array of string expectations, " + typeof expectations + " was passed.\n\nFor more info, go to " + gitPagesRepo + "#expectations");
        }

        /*==== check if expectations are valid. ====*/

        for (var i = 0; i <= (expectations.length -1); i++) {
            if (typeof expectations[i] !== 'string') {
                throw new ArgumentException("Expectations must only contain valid string expectations, " + typeof expectations[i] + " was detected - `" + expectations[i] + "`. \n\nFor more info, go to " + gitPagesRepo + "#expectations");
            }

            var argumentExpectations = expectations[i].split('|');

            for (var j = 0; j <= (argumentExpectations.length -1); j++) {
                if (!validExpectation(argumentExpectations[j])) {
                    throw new ArgumentException("A malformed string of expectation was detected - `" + argumentExpectations[j] + "`. \n\nFor more info, go to " + gitPagesRepo + "#expectations");
                }
            }
        }

        /*==== check expectations would pass ====*/

        if (functionArgs.length < 1) {
            throw new ArgumentException("There we\'re no arguments passed. Function expects arguments to be: (" + expectations.toString().split(',').join(', ') + "). \n\nFor more info, go to " + gitPagesRepo + "#Function.arguments");
        }

        if (functionArgs.length !== expectations.length) {
            throw new ArgumentException("The number of function arguments does not match the number of expected arguments. \n\nFor more info, go to " + gitPagesRepo + "#Function.arguments");
        }

        for (var i = 0; i <= (functionArgs.length -1); i++) {
            var argumentExpectations = expectations[i].split('|');

            if (argumentExpectations.indexOf('*') !== -1) {
                continue;
            }

            if (argumentExpectations.indexOf(typeof functionArgs[i]) === -1) {
                results[i + 1] = expectations[i];
                
                if (callback === false) {
                    throw new ArgumentException("Argument number " + (i + 1) + " must be " + expectations[i] + ". \n\nFor more info, go to " + gitPagesRepo + "#Function.arguments");
                }
            }
        }

        /*==== check callback and execute. ====*/

        if (callback !== false) {
            if (typeof callback !== 'function') {
                throw new ArgumentException("Callback function must be a function, " + typeof callback + " was passed. \n\nFor more info, go to " + gitPagesRepo + "#callback-function");
            }

            callback(results);
        }

        // ...we can now assume that all argument are in line with what the expectations are :)
        return true;
    }

    /**
     * Checks if string passed is a valid string expectation.
     * @param {string}
     * @returns {boolean}
     */
    function validExpectation(stringDataType) {
        return ['object', 'function', 'string', 'number', 'boolean', '*'].indexOf(stringDataType) !== -1;
    }

    /**
     * ArgumentException object
     * @param {string}
     */
    function ArgumentException(message) {
        this.name = "ArgumentException";
        this.message = message;
        this.toString = function() {
            return this.name + ": " + this.message;
        };
    }

    return {
        expect: expect
    }

})();