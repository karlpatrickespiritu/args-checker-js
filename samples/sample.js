(function (args) {
	"use strict";

    function run(booleanOrString, anyDataType, functionOrObject, aNumber) {

        /*
        * if expectations aren't met, args checker will throw appropriate exceptions
        * notifying the user regarding the errors of the arguments.
        * */
    	args.expect(arguments, ['boolean|string', '*', 'function|object', 'number']);

        console.log("\nArguments passed!");
    }

    // run();                            //---> this should NOT PASS
    // run({}, 1, 200, false);           //---> this should NOT PASS

    run(true, 1, {}, 1);                 //---> this should PASS
    run('aString', 1, function(){}, 25); //---> this should PASS

})(args);