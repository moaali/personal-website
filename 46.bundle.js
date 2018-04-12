webpackJsonp([46],{761:function(n,r){n.exports="### Arrow Function\r\n\r\n#### Description\r\n\r\nShorter syntax for function expression with simplified scope rules.\r\n\r\n\r\n\r\n\r\n\r\n#### Syntax\r\n\r\n```javascript\r\n// Basic syntax\r\n( /* Function Parameters */ ) => { /* Function Body */ }\r\n\r\n\r\n// No parameters\r\n() => {}\r\n\r\n\r\n// Multiple parameters\r\n( param1, param2, paramN ) => {}\r\n\r\n\r\n// Destructuring parameters\r\n( [x, y], [1, 2] ) => {}\r\n\r\n\r\n// Default parameters\r\n( x = 1 ) => {}\r\n\r\n\r\n// Rest parameters\r\n( ...rest ) => {}\r\n\r\n\r\n/**\r\n * implicit return: mustaches and return keyword are\r\n * optional when returning single expression\r\n */\r\n() => expression\r\n\r\n\r\n// For returning objects wrap object inside parenthesis\r\n() => ({ x: 1 })\r\n\r\n\r\n// With single parameter parenthesis are optional\r\nsingleParam => {} \r\n```\r\n\r\n\r\n\r\n#### Notes\r\n\r\n1. Arrow function can't be used as **constructor** function ( i.e. can't be instantiated with `new` keyword ).\r\n2. Arrow function can't be used as **generator**.\r\n3. Arrow function doesn't have a `prototype` property.\r\n4. Arrow function doesn't bind `this`, `argument`, `new.target`, `super`.\r\n5. Arrow function has lexical `this` meaning it **inherits `this` from the enclosing context**.\r\n6. Arrow function with `call()`, `apply()`, `bind()` ignores the passed context and only consider the passed arguments.\r\n7. Arrow function ignores Strict mode rules regard `this`.\r\n8. Arrow function doesn't have `arguments` object, it inherits it from the enclosing regular function otherwise `RefrenceError` is thrown.\r\n\r\n```javascript\r\n// [ Note 3 ]\r\nlet arrow = () => {}; \r\nconsole.log( arrow.prototype ); // undefined\r\n\r\n\r\n// [ Note 4 ]\r\nlet obj = { \r\n  fn: function () { \r\n    let arrow = () => { return this }\r\n    return arrow();\r\n  }\r\n};\r\n\r\nobj.fn(); // obj not Window\r\n\r\n\r\n// [ Note 6 ] \r\nvar addOne = () => { return this.x + 1 }\r\nvar y = { x: 0 }\r\naddOne.call( y ); // NaN not 1 as this === Window\r\n\r\n\r\n// [ Note 7 ] \r\nlet strict = () => { 'use strict'; return this; } // Window not undefined \r\nlet loose  = () => { return this; } // Window\r\n\r\n\r\n// [ Note 8 ]\r\nlet fn = function ( x ) {\r\n  console.log( arguments[0] )   // x\r\n  let arrow = ( y ) => { \r\n    console.log( arguments[0] ) // x not y \r\n  }\r\n  \r\n  arrow( 1 );\r\n}\r\n\r\nfn( 0 );\r\n```\r\n\r\n\r\n\r\n\r\n#### Practical usage\r\n\r\nArrow functions are used usually as callback functions, non-method functions or generally at situation where the dynamic binding of `this` and `arguments` isn't needed, for example:\r\n\r\n1. Use as `Array` functional programming methods iterator function.\r\n2. Use as callback in timing functions.\r\n3. Use as **Promises** callback functions.\r\n4. Use as simpler **IIFE**.\r\n\r\n```javascript\r\n// [ Item 1 ]\r\nlet arr = [1, 2, 3, 4, 5];\r\nlet odd = arr.filter( item => item % 2 !== 0 ); // [1, 3, 5]\r\n\r\n\r\n// [ Item 2 ]\r\nsetTimeout(() => {\r\n  console.log( 'I\\'m simple :)' )\r\n}, 100);\r\n\r\n\r\n// [ Item 3 ]\r\nlet p = new Promise((resolve, reject) => {\r\n  // Do your magic\r\n});\r\n\r\np.then(data => {\r\n  // Play with data\r\n});\r\n\r\n\r\n// [ Item 4 ]\r\n;(() => {\r\n  // IIFE without passed arguments\r\n})();\r\n\r\n;(global => {\r\n  // IIFE with passed arguments\r\n})(window);\r\n``` \r\n"}});