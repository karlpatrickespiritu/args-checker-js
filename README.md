# args-checker-js

a lightweight function's arguments checker in javascript. :heavy_check_mark:

### Version
1.0.0

### Installation

```sh
$ bower install args-checker-js
```
### The Problem
We all know javascript doesn't support strict typing unlike other languages. So if a function, like the one shown below, expects it's arguments to be of certain types, we must implement type checking inside the function to make sure that the arguments are of valid types. This type checking can easily make our code too long. And imagine if the function expects too many arguments(although it's a bad practice)? :scream:

```javascript
function run(stringOrNumber, anObject, aFunction) {
	if ((typeof stringOrNumber !== 'string') && (typeof stringOrNumber !== 'number')) {
		throw "Argument number 1 must be a string or a number!"
	}

	if (typeof anObject !== 'object') {
		throw "Argument number 2 must be an object!"
	}

	if (typeof aFunction !== 'function') {
		throw "Argument number 3 must be a function!"
	}
	
	// arguments are now valid. do something here..
}
```
### The Solution
Args-checker-js is a tiny javascript object that's designed to fix this problem. This has solved mine, so i'm hoping it might solve yours. :relaxed: 

Here's how..
```javascript
function run(stringOrNumber, anObject, aFunction) {

	args.expect(arguments, ['string|number', 'object', 'function']);
	
	// arguments are now valid. do something here..
}
```
