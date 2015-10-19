(function (args) {
	"use strict";

    function run(stringOrFunction, booleanOrObjectOrAll, anumber, afunction) {
    	
    	args.expect(arguments, ['string|function', 'boolean|object|*', 'number', 'function']);

        console.log("\n\nPassed!");
    }

    run('1', '1', 1 , 4);
    // run({}, [], 'string', 100);
})(args);