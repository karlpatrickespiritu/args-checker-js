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

    // run();                                   //---> this should NOT PASS
    // run({}, 1, 200, false);                  //---> this should NOT PASS
    // run(true, 1, {}, 1);                     //---> this should PASS
    // run('a string', 1, function(){}, 25);    //---> this should PASS


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
    }

    // this should NOT PASS, exception thrown since params must match the expectations
    // run2();

    // this should NOT PASS, exception thrown since params must match the expectations
    // run2('a string');

    // this should NOT PASS, second parameter must be a number. 
    // But this won't throw any exception since a callback function was passed in the args.expect() function.
    run2(true);

    // this should PASS. And results are passed on the callback function (3rd param on args.expect)
    // run2(function() {}, 200, true, ['an', 'array']);

    // this should PASS. And results are passed on the callback function (3rd param on args.expect)
    // run2('a string', 200, true, { an: 'object' });

})(args);