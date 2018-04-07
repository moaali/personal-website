webpackJsonp([7,31],{106:function(e,t,r){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(2)),a=n(r(221)),c=n(r(57)),l=n(r(776));!function(){var t=r(1).enterModule;t&&t(e)}();var s=function(){return o.default.createElement(c.default,null,o.default.createElement("div",{id:"post"},o.default.createElement("hgroup",{className:"mB-60"},o.default.createElement("h5",{className:"c-minor"},"Jun 28, 2017"),o.default.createElement("h1",{className:"c-blocker"},"ES6 Overview - Reflect"),o.default.createElement("hr",null)),o.default.createElement(a.default,{source:l.default})))},f=s,i=f;t.default=i,function(){var t=r(1).default,n=r(1).leaveModule;t&&(t.register(s,"Es6OverviewReflect","E:\\Dropbox\\Projects\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewReflect\\index.jsx"),t.register(f,"default","E:\\Dropbox\\Projects\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewReflect\\index.jsx"),n(e))}()}).call(t,r(7)(e))},776:function(e,t){e.exports="### Reflect\n\n#### Description\nBuilt-in object that provide methods for interceptable JavaScript operations.\n- It's not a function object.\n- Not constructible, it does not have a `[[Construct]]` internal method. (Can't use `new Reflect()` ).\n- Not invokable, it does not have a `[[Call]]` internal method. (Can't be invoke it as a function `Reflect()`).\n\n\n#### API\n1. **`Reflect.apply()`**\n2. **`Reflect.construct()`**\n3. **`Reflect.defineProperty()`**\n4. **`Reflect.deleteProperty()`**\n5. **`Reflect.get()`**\n6. **`Reflect.getOwnPropertyDescriptor()`**\n7. **`Reflect.getPrototypeOf()`**\n8. **`Reflect.has()`**\n9. **`Reflect.isExtensible()`**\n10. **`Reflect.ownKeys()`**\n11. **`Reflect.preventExtensions()`**\n12. **`Reflect.set()`**\n13. **`Reflect.setPrototypeOf()`**\n\nHere are the API methods equivalent to understand how it works.\n###### Syntax\n```javascript\nReflect.apply(fn, thisArg, argsArray) <=> Function.prototype.apply.call(Math.floor, undefined, [1.75]);\n\nReflect.construct(Target, argsList, newTarget) <=> new Target(...argsList);\n\n// Diff: `Reflect` case return Boolean\nReflect.defineProperty(target, property, descriptor) <=> Reflect.defineProperty(target, property, descriptor)\n\n// Diff: `Reflect` case return Boolean\nReflect.deleteProperty(target, property) <=> delete target.property\n\n// Object property accessors in the form of a function.\nReflect.get(target, property, receiver) <=>\n\n// Diff: `Reflect` case return Boolean\nReflect.set(target, property, value, receiver) <=> // Object property accessors in the form of a function.\n\n// Diff: if non-object is set as the target in case of using `Reflect` it will throw a type error.\nReflect.getOwnPropertyDescriptor(target, property) <=> Reflect.getOwnPropertyDescriptor(target, property)\n\nReflect.getPrototypeOf(target) <=> Object.getPrototypeOf(target)\n\n// same as in operator but it works like a function\nReflect.has(target, property) <=> property in target\n\n// same but target must be an object in `Reflect` or error is thrown\nReflect.isExtensible(target) <=> Object.isExtensible(target)\n\nReflect.ownKeys(target) <=> Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))\n\n// Return Boolean and target must be object otherwise error is thrown\nReflect.preventExtensions(target) <=> Object.preventExtensions(target)\n\n\nReflect.setPrototypeOf(target, prototype) <=> Object.setPrototypeOf(target, prototype)\n```\n"}});