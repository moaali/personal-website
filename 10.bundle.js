webpackJsonp([10,34],{103:function(r,n,e){"use strict";(function(r){function t(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(e(2)),a=t(e(221)),s=t(e(57)),c=t(e(773));!function(){var n=e(1).enterModule;n&&n(r)}();var p=function(){return o.default.createElement(s.default,null,o.default.createElement("div",{id:"post"},o.default.createElement("hgroup",{className:"mB-60"},o.default.createElement("h5",{className:"c-minor"},"Aug 13, 2017"),o.default.createElement("h1",{className:"c-blocker"},"ES6 Overview - Object Methods"),o.default.createElement("hr",null)),o.default.createElement(a.default,{source:c.default})))},i=p,l=i;n.default=l,function(){var n=e(1).default,t=e(1).leaveModule;n&&(n.register(p,"Es6OverviewObjectMethods","E:\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewObjectMethods\\index.jsx"),n.register(i,"default","E:\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewObjectMethods\\index.jsx"),t(r))}()}).call(n,e(7)(r))},773:function(r,n){r.exports="### Object Methods\r\n\r\n#### Methods List\r\n\r\n- Object.prototype.__proto__\r\n- Object.is()\r\n- Object.setPrototypeOf()\r\n- Object.assign()\r\n- Object.getOwnPropertySymbols()\r\n\r\n#### `Object.prototype.__proto__`\r\n##### Description\r\nObject property that refrence its constructor prototype obejct.\r\n\r\n##### Syntax\r\n```javascript\r\ninstance.__proto__\r\n```\r\n\r\n\r\n##### Examples\r\n```javascript\r\nlet\r\n  x = function () {},\r\n  y = {};\r\n\r\nx.__proto__ === x.constructor.prototype === Function.prototype\r\ny.__proto__ === y.constructor.prototype === Object.prototype\r\n```\r\n\r\n\r\n#### `Object.is()`\r\n##### Description\r\nChecks equality of its arguments without applying implicit coersion\r\n\r\n##### Syntax\r\n```javascript\r\nObject.is(param1, param2)\r\n```\r\n\r\n\r\n##### Examples\r\n```javascript\r\nObject.is(NaN, NaN) // => true\r\nObject.is(NaN, 0/0) // => true\r\nObject.is(0, -0)    // => false\r\nObject.is({}, {})   // => false\r\n```\r\n\r\n\r\n#### `Object.setPrototypeOf()`\r\n##### Description\r\nDefine an object as a prototype of other object.\r\n\r\n##### Syntax\r\n```javascript\r\nObject.setPrototypeOf(obj, prototype);\r\n```\r\n\r\n\r\n##### Examples\r\n```javascript\r\nconst Human = {\r\n  kind: 'human'\r\n};\r\n\r\nconst Man = {\r\n  gender: 'Man'\r\n}\r\n\r\nconst me = {\r\n  name: 'Mo'\r\n}\r\n\r\nObject.setPrototypeOf(Man, Human);\r\nObject.setPrototypeOf(me, Man);\r\n\r\nme // => { kind: 'human', [[gender: 'Man', name: 'Mo']] }\r\n\r\n```\r\n\r\n\r\n#### `Object.assign()`\r\n##### Description\r\nShallow copies own enumerable properties from one/multiple source object(s) to a traget object.\r\n\r\n##### Syntax\r\n```javascript\r\nObject.assign(target, srcObj1, ...)\r\n```\r\n\r\n\r\n##### Examples\r\n```javascript\r\nconst\r\n  x = { a: 1 },\r\n  y = { b: 2 },\r\n  z = Object.assign({}, x, y);\r\n\r\nz // => { a: 1, b: 2 }\r\n```\r\n\r\n\r\n#### `Object.getOwnPropertySymbols()`\r\n##### Description\r\nReturns an array of all symbol properties of an object\r\n\r\n##### Syntax\r\n```javascript\r\nObject.getOwnPropertySymbols(obj) // => [Symbol(x), ...]\r\n```\r\n\r\n\r\n##### Examples\r\n```javascript\r\nconst\r\n  obj = {\r\n    [Symbol('a')]: 1,\r\n    [Symbol('b')]: 2\r\n  };\r\n\r\nObject.getOwnPropertySymbols(obj) // => [Symbol(a), Symbol(b)]\r\n```\r\n"}});