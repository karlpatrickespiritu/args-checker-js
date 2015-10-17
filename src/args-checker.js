/**
 * Parameter checker
 */
var args = (function () {

    function expect(functionArgs, expectations, callback) {

        // check for own function arguments
        if (arguments.length < 1) {
            throw new ArgumentException("There were no arguments passed. Function arguments and expectations are required.");
        }

        // make sure the `functionArgs` is an instance of javascript `arguments`
        if (functionArgs.constructor !== Object) {
            throw new ArgumentException("First argument must be the functions\' `arguments`");
        }

        // check for the function that was supposed to be checked
        if (!(expectations.constructor === Array)) {
            throw new ArgumentException("");
        }

        if (expectations.length) {
            for (var i = 0; i <= (expectations.length -1); i++) {
                var argType = typeof functionArgs[i],
                    argExpectations = expectations[i].split('|');

                if ((argType === 'undefined') || (argExpectations.indexOf(argType) === -1)) {
                    _throwArgumentDataTypeException((i+1), argExpectations);
                }
            }
        } else {
            throw new ArgumentException("Second parameter - expectations, is required.");
        }
    }

    /**
     * Checks if string passed is a valid javascript data type.
     * @param {string}
     * @returns {boolean}
     */
    function validDataType(dataType) {
        return ['object', 'function', 'string', 'number', 'boolean'].indexOf(dataType) !== -1;
    }

    /**
     * Throws an argument exception if the function had an invalid argument data type
     * @param {integer}
     * @param {array}
     * @private
     */
    function _throwArgumentDataTypeException(argumentIndex, mustbe) {
        var an = ['object'],
            a = ['function', 'string', 'number', 'boolean'];

        for (var i = 0; i <= (mustbe.length -1); i++) {
            if (!validDataType(mustbe[i])) {
                throw new ArgumentException("Argument number " + argumentIndex + " is not a valid type. only ");
            } else {
                throw new ArgumentException("Argument number " + argumentIndex + " must be " + (a.indexOf(mustbe) !== -1 ? "a": "an") + " " + mustbe);
            }
        }
    }

    /**
     * ArgumentException object
     * @param {string}
     */
    function ArgumentException(message) {
        this.message = message;
        this.name = "ArgumentException";
        this.toString = function() {
            return this.name + ": " + this.message;
        };
    }

    return {
        expect: expect
    }

})();