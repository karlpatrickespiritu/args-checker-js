(function (args) {
	"use strict";

    function run(stringOfFunction, booleanOrObjectOrAll, anumber, afunction) {
    	
    	args.expect(arguments, ['string|function', 'boolean|object|*', 'number', 'function']);

        console.log("\n\nPassed!");
    }

    run();
    // run({}, [], 'string', 100);
})(args);