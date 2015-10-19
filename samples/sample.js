(function (args) {
	"use strict";

    /**
     * sample method.
     *
     * @param {boolean/string}
     * @param {mixed/optional}
     * @param {function/object}
     * @param {number}
     */
    function run(booleanOrString, anyDataType, functionOrObject, aNumber) {
        /*
        * if expectations aren't met, args checker will throw appropriate exceptions
        * notifying the user regarding the errors of the arguments.
        * */
    	args.expect(arguments, ['boolean|string', '*', 'function|object', 'number']);

        // do something here...
        console.log("\n\nfunction `run` arguments passed!");
    }

    // run();                            //---> this should NOT PASS
    // run({}, 1, 200, false);           //---> this should NOT PASS
    // run(true, 1, {}, 1);              //---> this should PASS
    // run('a string', 1, function(){}, 25); //---> this should PASS

    /* ======================================================================= */

    /**
     * another sample method.
     *
     * @param {string/function}
     * @param {number}
     * @param {boolean}
     * @param {mixed/optional}
     */
    function run2(stringOrFunction, number, boolean, anyDataType) {
        /*
        * If you don't want args-checker to throw errors, just simply pass a true value
        * on the third parameter. Or you can pass a callback function to get the results/errors
        * thrown by args-checker.
        * */
        args.expect(arguments, ['string|function', 'number', 'boolean', '*'], function(results) {
            console.log(results);
        });

        // do something here...
        console.log("\n\nfunction `run2` arguments passed!");
    }

    // run2();          //---> this should NOT PASS
    run2('a string');   //---> this should NOT PASS

})(args);