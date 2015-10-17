/**
 * Parameter checker
 */
var args = (function () {

    function expect(args, expectations, callback) {

        // TODO:: check if args is instance of arguments object?

        if (arguments.length < 1 || !(expectations.constructor === Array)) {
            _throwArgumentDataTypeException(2, ['array']);
        }

        if (expectations.length) {
            for (var i = 0; i <= (expectations.length -1); i++) {
                var argType = typeof args[i],
                    argExpectations = expectations[i].split('|');

                if ((argType === 'undefined') || (argExpectations.indexOf(argType) === -1)) {
                    _throwArgumentDataTypeException((i+1), argExpectations);
                }
            }
        } else {
            //
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
            a = ['function', 'string', 'number', 'boolean'],
            article = '';

        for (var i = 0; i <= (mustbe.length -1); i++) {
            console.log(mustbe[i]);
            article = (a.indexOf(mustbe) !== -1) ? 'a': 'an';
            if (!validDataType(mustbe[i])) {
                throw new ArgumentException("Argument number " + argumentIndex + " is not a valid type. only ");
            } else {
                throw new ArgumentException("Argument number " + argumentIndex + " must be " + article + " " + mustbe);
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