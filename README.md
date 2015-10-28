# args-checker-js

[![Build Status](https://travis-ci.org/karlpatrickespiritu/args-checker-js.svg?branch=master)](https://travis-ci.org/karlpatrickespiritu/args-checker-js) [![npm version](https://badge.fury.io/js/args-checker-js.svg)](https://badge.fury.io/js/args-checker-js)

a lightweight function's arguments checker in javascript.

Version
--------
1.0.1

Installation
--------

via [npm]
```sh
$ npm install args-checker-js
```
via [bower]
```sh
$ bower install args-checker-js
```

The Problem
--------
We all know javascript doesn't support strict typing unlike other languages. So if a function, like the one shown below, expects it's arguments to be of certain types, we must implement type checking inside the function to make sure that the arguments are of valid types. This type checking can easily make our code too long. And imagine if the function expects too many arguments (although it's a bad practice)?

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
it can get ugly, right?

The Solution
--------
Args-checker-js is a tiny javascript object that's designed to fix this problem. This has solved mine, so i'm hoping it can solve yours. 

Here's a sample snippet..
```javascript
function run(stringOrNumber, anObject, aFunction) {
	
	// by default, if an argument is not of the right type, Exceptions will be thrown.
	args.expect(arguments, ['string|number', 'object', 'function']);
	
	// arguments are now valid. do something here..
}
```

Usage
--------
```html
<script src="args-checker/dist/args-checker.min.js"></script>
```

API
--------
#### args.expect([function arguments], [expectations], callback)

* **function arguments** - The [arguments] object is an Array-like object corresponding to the arguments passed to a function
* **expectations** - An array of strings which corresponds the the expected [arguments]. Valid syntax for expectations are any the following: `object`, `function`, `string`, `number`, `boolean` and `*`. An argument may contain multiple expectations: `args.expect(arguments, ['string|object|function|number']);`. The `*` expectation means that an argument expects any data type, it can also be used if an argument may be optional.
* **callback** - if callback function was specified, args-checker will no longer throw exceptions if an error was found. This function receives a single parameter: The results object which contains all the information regarding the [arguments] passed during runtime.

See **[Examples]**

Maintainers
--------
 - [@karlpartrickespiritu]
 - and [contributors]
 
License
--------
(C) [Karl Patrick Espiritu] 2015, released under the MIT license

[Examples]: <https://github.com/karlpatrickespiritu/args-checker-js/tree/master/samples>
[Karl Patrick Espiritu]: <http://github.com/karlpatrickespiritu>
[@karlpartrickespiritu]: <http://github.com/karlpatrickespiritu>
[contributors]: <https://github.com/karlpatrickespiritu/args-checker-js/graphs/contributors>
[npm]:  <https://nodejs.org/en/>
[bower]: <http://bower.io>
[Examples]: <https://github.com/karlpatrickespiritu/args-checker-js/blob/master/samples/sample.js>
[arguments]: <https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments>
