(function (args) {
	"use strict";

    function run(stringOrFunction, booleanOrObjectOrAll, anumber, afunction) {
    	
    	args.expect(arguments, ['boolean|string', '*', 'function|object', 'number']);

        console.log("\n\nArguments passed!");
    }

    // run({}, 1, 200, false); //---> this shouldn't pass

    run(true, 1, {}, 1); //---> this should pass

})(args);