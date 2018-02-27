webpackJsonp([22,46],{761:function(n,e){n.exports="### Arrow Function\n\n#### Description\n\nShorter syntax for function expression with simplified scope rules.\n\n\n\n\n\n#### Syntax\n\n```javascript\n// Basic syntax\n( /* Function Parameters */ ) => { /* Function Body */ }\n\n\n// No parameters\n() => {}\n\n\n// Multiple parameters\n( param1, param2, paramN ) => {}\n\n\n// Destructuring parameters\n( [x, y], [1, 2] ) => {}\n\n\n// Default parameters\n( x = 1 ) => {}\n\n\n// Rest parameters\n( ...rest ) => {}\n\n\n/**\n * implicit return: mustaches and return keyword are\n * optional when returning single expression\n */\n() => expression\n\n\n// For returning objects wrap object inside parenthesis\n() => ({ x: 1 })\n\n\n// With single parameter parenthesis are optional\nsingleParam => {} \n```\n\n\n\n#### Notes\n\n1. Arrow function can't be used as **constructor** function ( i.e. can't be instantiated with `new` keyword ).\n2. Arrow function can't be used as **generator**.\n3. Arrow function doesn't have a `prototype` property.\n4. Arrow function doesn't bind `this`, `argument`, `new.target`, `super`.\n5. Arrow function has lexical `this` meaning it **inherits `this` from the enclosing context**.\n6. Arrow function with `call()`, `apply()`, `bind()` ignores the passed context and only consider the passed arguments.\n7. Arrow function ignores Strict mode rules regard `this`.\n8. Arrow function doesn't have `arguments` object, it inherits it from the enclosing regular function otherwise `RefrenceError` is thrown.\n\n```javascript\n// [ Note 3 ]\nlet arrow = () => {}; \nconsole.log( arrow.prototype ); // undefined\n\n\n// [ Note 4 ]\nlet obj = { \n  fn: function () { \n    let arrow = () => { return this }\n    return arrow();\n  }\n};\n\nobj.fn(); // obj not Window\n\n\n// [ Note 6 ] \nvar addOne = () => { return this.x + 1 }\nvar y = { x: 0 }\naddOne.call( y ); // NaN not 1 as this === Window\n\n\n// [ Note 7 ] \nlet strict = () => { 'use strict'; return this; } // Window not undefined \nlet loose  = () => { return this; } // Window\n\n\n// [ Note 8 ]\nlet fn = function ( x ) {\n  console.log( arguments[0] )   // x\n  let arrow = ( y ) => { \n    console.log( arguments[0] ) // x not y \n  }\n  \n  arrow( 1 );\n}\n\nfn( 0 );\n```\n\n\n\n\n#### Practical usage\n\nArrow functions are used usually as callback functions, non-method functions or generally at situation where the dynamic binding of `this` and `arguments` isn't needed, for example:\n\n1. Use as `Array` functional programming methods iterator function.\n2. Use as callback in timing functions.\n3. Use as **Promises** callback functions.\n4. Use as simpler **IIFE**.\n\n```javascript\n// [ Item 1 ]\nlet arr = [1, 2, 3, 4, 5];\nlet odd = arr.filter( item => item % 2 !== 0 ); // [1, 3, 5]\n\n\n// [ Item 2 ]\nsetTimeout(() => {\n  console.log( 'I\\'m simple :)' )\n}, 100);\n\n\n// [ Item 3 ]\nlet p = new Promise((resolve, reject) => {\n  // Do your magic\n});\n\np.then(data => {\n  // Play with data\n});\n\n\n// [ Item 4 ]\n;(() => {\n  // IIFE without passed arguments\n})();\n\n;(global => {\n  // IIFE with passed arguments\n})(window);\n``` \n"},91:function(n,e,t){"use strict";(function(n){function r(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(t(2)),a=r(t(221)),s=r(t(57)),i=r(t(761));!function(){var e=t(1).enterModule;e&&e(n)}();var l=function(){return o.default.createElement(s.default,null,o.default.createElement("div",{id:"post"},o.default.createElement("hgroup",{className:"mB-60"},o.default.createElement("h5",{className:"c-minor"},"Jun 10, 2017"),o.default.createElement("h1",{className:"c-blocker"},"ES6 Overview - Arrow Function In Brief"),o.default.createElement("hr",null)),o.default.createElement(a.default,{source:i.default})))},c=l,u=c;e.default=u,function(){var e=t(1).default,r=t(1).leaveModule;e&&(e.register(l,"Es6OverviewArrowFunctionInBrief","E:\\Dropbox\\Projects\\playgrounds\\boilerplate\\src\\screens\\Blog\\components\\Es6OverviewArrowFunctionInBrief\\index.jsx"),e.register(c,"default","E:\\Dropbox\\Projects\\playgrounds\\boilerplate\\src\\screens\\Blog\\components\\Es6OverviewArrowFunctionInBrief\\index.jsx"),r(n))}()}).call(e,t(7)(n))}});