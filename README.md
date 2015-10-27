# args-checker-js

[![Build Status](https://travis-ci.org/karlpatrickespiritu/args-checker-js.svg?branch=master)](https://travis-ci.org/karlpatrickespiritu/args-checker-js) [![npm version](https://badge.fury.io/js/args-checker-js.svg)](https://badge.fury.io/js/args-checker-js)

a lightweight function's arguments checker in javascript.

### Version
1.0.0
### Installation

via [npm]
```sh
$ npm install args-checker-js
```
via [bower]
```sh
$ bower install args-checker-js
```
### The Problem
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
### The Solution
Args-checker-js is a tiny javascript object that's designed to fix this problem. This has solved mine, so i'm hoping it can solve yours. 

Here's how..
```javascript
function run(stringOrNumber, anObject, aFunction) {

	args.expect(arguments, ['string|number', 'object', 'function']);
	
	// arguments are now valid. do something here..
}
```

### Maintainers
 - [@karlpartrickespiritu]
 - and [contributors]

### License
(C) [Karl Patrick Espiritu] 2015, released under the MIT license

[Karl Patrick Espiritu]: <http://github.com/karlpatrickespiritu>
[@karlpartrickespiritu]: <http://github.com/karlpatrickespiritu>
[contributors]: <https://github.com/karlpatrickespiritu/args-checker-js/graphs/contributors>
[npm]:  <https://nodejs.org/en/>
[bower]: <http://bower.io>
