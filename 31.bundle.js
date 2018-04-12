webpackJsonp([31],{776:function(e,t){e.exports="### Reflect\r\n\r\n#### Description\r\nBuilt-in object that provide methods for interceptable JavaScript operations.\r\n- It's not a function object.\r\n- Not constructible, it does not have a `[[Construct]]` internal method. (Can't use `new Reflect()` ).\r\n- Not invokable, it does not have a `[[Call]]` internal method. (Can't be invoke it as a function `Reflect()`).\r\n\r\n\r\n#### API\r\n1. **`Reflect.apply()`**\r\n2. **`Reflect.construct()`**\r\n3. **`Reflect.defineProperty()`**\r\n4. **`Reflect.deleteProperty()`**\r\n5. **`Reflect.get()`**\r\n6. **`Reflect.getOwnPropertyDescriptor()`**\r\n7. **`Reflect.getPrototypeOf()`**\r\n8. **`Reflect.has()`**\r\n9. **`Reflect.isExtensible()`**\r\n10. **`Reflect.ownKeys()`**\r\n11. **`Reflect.preventExtensions()`**\r\n12. **`Reflect.set()`**\r\n13. **`Reflect.setPrototypeOf()`**\r\n\r\nHere are the API methods equivalent to understand how it works.\r\n###### Syntax\r\n```javascript\r\nReflect.apply(fn, thisArg, argsArray) <=> Function.prototype.apply.call(Math.floor, undefined, [1.75]);\r\n\r\nReflect.construct(Target, argsList, newTarget) <=> new Target(...argsList);\r\n\r\n// Diff: `Reflect` case return Boolean\r\nReflect.defineProperty(target, property, descriptor) <=> Reflect.defineProperty(target, property, descriptor)\r\n\r\n// Diff: `Reflect` case return Boolean\r\nReflect.deleteProperty(target, property) <=> delete target.property\r\n\r\n// Object property accessors in the form of a function.\r\nReflect.get(target, property, receiver) <=>\r\n\r\n// Diff: `Reflect` case return Boolean\r\nReflect.set(target, property, value, receiver) <=> // Object property accessors in the form of a function.\r\n\r\n// Diff: if non-object is set as the target in case of using `Reflect` it will throw a type error.\r\nReflect.getOwnPropertyDescriptor(target, property) <=> Reflect.getOwnPropertyDescriptor(target, property)\r\n\r\nReflect.getPrototypeOf(target) <=> Object.getPrototypeOf(target)\r\n\r\n// same as in operator but it works like a function\r\nReflect.has(target, property) <=> property in target\r\n\r\n// same but target must be an object in `Reflect` or error is thrown\r\nReflect.isExtensible(target) <=> Object.isExtensible(target)\r\n\r\nReflect.ownKeys(target) <=> Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))\r\n\r\n// Return Boolean and target must be object otherwise error is thrown\r\nReflect.preventExtensions(target) <=> Object.preventExtensions(target)\r\n\r\n\r\nReflect.setPrototypeOf(target, prototype) <=> Object.setPrototypeOf(target, prototype)\r\n```\r\n"}});