/**
 * Parameter checker
 */
var args = (function () {

    var gitPagesRepo = "http://www.github.com/karlpatrickespiritu/args-checker-js";

    function expect(functionArgs, expectations, callback) {

        var functionArgs = functionArgs || false,
            expectations = expectations || false,
            callback = callback || false;

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

        // =======PLAN=========
        // 
        // 1. check if expectations are valid. see next section.
        // 2. check if passed arguments === expectations
        //    - check also if types of both are equal (or in array of the expectations)
        //       ex: args[1, 'imastring', function(){}] === expectations['int|function|boolean', 'string', 'function'] 
        // 3. we can now assume that everyting is okay. everything is equal.
        // 4. check if callback is present, and pass the return object info in callback
        // 5 ....... TODO 

        // Valid Expectations = [string, object, number, function, boolean, *] 
        // * means any of the data types

        // check if expectations are valid.
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

        // check expectations would pass
        if (functionArgs.length < 1) {
            throw new ArgumentException("There we\'re no arguments passed. Function expects arguments to be: (" + expectations.toString().split(',').join(', ') + "). \n\nFor more info, go to " + gitPagesRepo + "#");
        }

        if (functionArgs.length !== expectations.length) {
            throw new ArgumentException("The number of function arguments does not match the number of expected arguments. \n\nFor more info, go to " + gitPagesRepo + "#");
        }

        // console.log(functionArgs.length, expectations.length);
        for (var i = 0; i <= (functionArgs.length -1); i++) {
            var argumentExpectations = expectations[i].split('|');

            /*console.log(typeof functionArgs[i])
            console.log(argumentExpectations[typeof functionArgs] !== 'undefined');
            console.log(argumentExpectations[typeof functionArgs], typeof functionArgs);*/

            /*if (argumentExpectations['*'] !== 'undefined') {
                continue;
            }*/

            if (argumentExpectations.indexOf(typeof functionArgs) !== 'undefined') {
                throw new ArgumentException("Argument number " + (i + 1) + " must be " + expectations[i]);
            }
        }
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