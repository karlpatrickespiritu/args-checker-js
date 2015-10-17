(function (argschecker) {
    "use strict";

    function run(name, numbers, age, callback) {
        // if callback function not set, and if expectations not met, args checker will immediately throw an exception
        argschecker.expect(arguments);
        // argschecker.expect(arguments, ['string', 'object|number', 'number', 'function']);

        console.log("all arguments passed!");
    }

    //run({}, [], 'string', 100);
    run();
})(args);