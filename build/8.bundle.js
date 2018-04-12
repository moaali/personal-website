webpackJsonp([8,32],{105:function(r,n,e){"use strict";(function(r){function t(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(e(2)),a=t(e(221)),s=t(e(57)),p=t(e(775));!function(){var n=e(1).enterModule;n&&n(r)}();var c=function(){return o.default.createElement(s.default,null,o.default.createElement("div",{id:"post"},o.default.createElement("hgroup",{className:"mB-60"},o.default.createElement("h5",{className:"c-minor"},"Sep 17, 2017"),o.default.createElement("h1",{className:"c-blocker"},"ES6 Overview - Proxy"),o.default.createElement("hr",null)),o.default.createElement(a.default,{source:p.default})))},i=c,l=i;n.default=l,function(){var n=e(1).default,t=e(1).leaveModule;n&&(n.register(c,"Es6OverviewProxy","E:\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewProxy\\index.jsx"),n.register(i,"default","E:\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewProxy\\index.jsx"),t(r))}()}).call(n,e(7)(r))},775:function(r,n){r.exports="### Proxy\r\n\r\n#### Description\r\nObject used to override/customize default behavior of fundamental operations on other objects.\r\n\r\n\r\n#### Syntax\r\n```javascript\r\n/**\r\n * Proxy Object.\r\n * @param  {*}      target  target object to operate on\r\n * @param  {Object} handler tarps container\r\n * @return {Proxy}          Proxy Object\r\n */\r\nconst p = new Proxy(target, handler)\r\n```\r\n\r\n\r\n#### Practical Usage\r\nHere are some of the practical usages of the `Proxy` object. (VIEW REPO OF THE FOLLOWING EXAMPLES HERE).\r\n\r\n1. Listening to changes on a specific object.\r\n2. Object members type validation.\r\n3. Achieving true private members.\r\n4. Revoking access to data.\r\n5. Intercepting certain operations on objects.\r\n\r\n\r\n#### API\r\n\r\n1. **`Proxy.revocable()`**\r\n2. **`handler.getPrototypeOf()`**\r\n3. **`handler.setPrototypeOf()`**\r\n4. **`handler.isExtensible()`**\r\n5. **`handler.preventExtensions()`**\r\n6. **`handler.getOwnPropertyDescriptor()`**\r\n7. **`handler.defineProperty()`**\r\n8. **`handler.has()`**\r\n9. **`handler.get()`**\r\n10. **`handler.set()`**\r\n11. **`handler.deleteProperty()`**\r\n12. **`handler.ownKeys()`**\r\n13. **`handler.apply()`**\r\n14. **`handler.construct()`**\r\n\r\n\r\n##### **`Proxy.revocable()`**\r\n\r\n###### Description\r\nCreates a revocable `Proxy` object.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n /**\r\n * Creates a revocable Proxy object.\r\n * @param  {*}      target  target object to operate on\r\n * @param  {Object} handler tarps container\r\n *\r\n * @return {Object}\r\n *    Object with two props `proxy` containing the Proxy Object\r\n *    and `revoke` method to terminate the proxy.\r\n */\r\nProxy.revocable(target, handler);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  revocable = Proxy.revocable({}, {\r\n    get(target, name) {\r\n      return `GET: \"${name}\" Property`\r\n    }\r\n  });\r\n\r\nlet p = revocable.proxy;\r\n\r\nconsole.log(p.a); // => GET: \"a\" Property\r\n\r\n// when calling this method every trap throws a TypeError\r\nrevocable.revoke();\r\n\r\nconsole.log(p.a); // => TypeError\r\n\r\n```\r\n\r\n\r\n\r\n\r\n##### **`handler.getPrototypeOf()`**\r\n\r\n###### Description\r\nIntercepts/Customizes `[[GetPrototypeOf]]` operations.\r\n.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercept [[GetPrototypeOf]] Operations.\r\n *\r\n * @param  {Object} target => target object to find prototype for.\r\n *\r\n * @return {Object|null}\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. Returned value isn't `null` || `Object`.\r\n *     02. Target object isn't extensible.\r\n */\r\nhandler.getPrototypeOf(target);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  obj   = {},\r\n  proto = {},\r\n  getProto;\r\n\r\ngetProtoProxy = target => {\r\n  const handler = {\r\n    getPrototypeOf(target) {\r\n      console.log('[[GetProtoType]] Trapped')\r\n      return proto;\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler);\r\n}\r\n\r\nlet p = getProtoProxy(obj);\r\nconsole.log(Object.getPrototypeOf(p)) // => [[GetProtoType]] Trapped {}\r\n```\r\n\r\n\r\n\r\n###### Notes\r\n- `handler.getPrototypeOf()` traps any operation that depends on `[[GetProtoType]]` internal method which will be one of the following:\r\n  1. `Object.getPrototypeOf()`\r\n  2. `Reflect.getPrototypeOf()`\r\n  3. `Object.prototype.isPrototypeOf`\r\n  4. `instanceof`\r\n  5. `__proto__`\r\n\r\n\r\n\r\n\r\n\r\n##### **`handler.setPrototypeOf()`**\r\n\r\n###### Description\r\nIntercepts/Customizes `Object.setPrototypeOf()` operations.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercept setting `[[Prototype]]` internal property Operations.\r\n *\r\n * @param  {Object} target    => target object to set prototype for.\r\n * @param  {Object} prototype => object to set as prototype for target.\r\n *\r\n * @return {Boolean}\r\n *    true if the prototype is set, false otherwise.\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. Target object isn't extensible. So the prototype object should be\r\n *         the same as `Object.getPrototypeOf()`\r\n */\r\nhandler.setPrototypeOf(target, prototype);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  obj   = {},\r\n  proto = {},\r\n  setProtoProxy;\r\n\r\nsetProtoProxy = (target, proto) => {\r\n  const handler = {\r\n    setPrototypeOf(target, proto) {\r\n      return true\r\n    }\r\n  };\r\n\r\n  return new Proxy(target, proto);\r\n};\r\n\r\nconst p = setProtoProxy(obj, proto);\r\nconsole.log(Object.setPrototypeOf(p, null)) // => { a: 1 }\r\n```\r\n\r\n\r\n###### Notes\r\n- `handler.setPrototypeOf()` traps any operation that depends on setting `[[ProtoType]]` internal property which will be one of the following:\r\n  1. `Object.setPrototypeOf()`\r\n  2. `Reflect.setPrototypeOf()`\r\n\r\n\r\n##### **`handler.isExtensible()`**\r\n\r\n###### Description\r\nIntercepts/Customizes `Object.isExtensible()` operations.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercept `Object.isExtensible()` Operations.\r\n *\r\n * @param  {Object} target => target object to check its extensibility.\r\n *\r\n * @return {Boolean}\r\n *    true if the object is extensible, false otherwise.\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. `Object.isExtensible(proxy)` !== `Object.isExtensible(obj)`\r\n */\r\nhandler.isExtensible(target);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  obj      = {},\r\n  nonExObj = {},\r\n  extendProxy;\r\n\r\nObject.preventExtensions(nonExObj);\r\n\r\nextendProxy = target => {\r\n  const handler = {\r\n    isExtensible(target) {\r\n      console.log('isExtensible is accessed!!');\r\n      return Reflect.isExtensible(target);\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet\r\n  p1 = extendProxy(obj),\r\n  p2 = extendProxy(nonExObj);\r\n\r\nconsole.log(Object.isExtensible(p1)); // => isExtensible is accessed!, true\r\nconsole.log(Object.isExtensible(p2)); // => isExtensible is accessed!, false\r\n```\r\n\r\n\r\n\r\n##### **`handler.preventExtensions()`**\r\n\r\n###### Description\r\nIntercepts/Customizes `Object.preventExtensions()` operation.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercept `Object.preventExtensions()` Operation.\r\n *\r\n * @param  {Object} target => target object to prevent extensibility for.\r\n *\r\n * @return {Boolean}\r\n *    true if the object is extensible, false otherwise.\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. `Object.preventExtensions(proxy)` === Object.isExtensible(proxy)\r\n */\r\nhandler.preventExtensions(target);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n\r\n```javascript\r\nlet\r\n  obj      = {},\r\n  extendProxy;\r\n\r\nextendProxy = target => {\r\n  const handler = {\r\n    preventExtensions(target) {\r\n      console.log('preventExtensions is accessed!!');\r\n      return Reflect.preventExtensions(target)\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet p = extendProxy(obj);\r\n\r\nconsole.log(Object.preventExtensions(p)); // => isExtensible is accessed!, true\r\n```\r\n\r\n\r\n\r\n\r\n##### **`handler.getOwnPropertyDescriptor()`**\r\n\r\n###### Description\r\nIntercepts/Customizes `Object.getOwnPropertyDescriptor()` operation.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercept `Object.getOwnPropertyDescriptor()` Operation.\r\n *\r\n * @param  {Object} target   => target object to look for property in.\r\n * @param  {String} property => property to get descriptor for.\r\n *\r\n * @return {Object|undefined}\r\n *    descriptor object for the property or undefined if it doesn't exist.\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. Return isn't `Object` or `undefined`.\r\n *     02. Return undefined for existed property in non-extensible target\r\n *     03. Return undefined for non-configurable property in target\r\n */\r\nhandler.getOwnPropertyDescriptor(target, property);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  obj  = {a: 1},\r\n  obj2 = {c: 2},\r\n  describeProxy;\r\n\r\nObject.preventExtensions(obj2);\r\nObject.defineProperty(obj, 'b', {configurable: false});\r\n\r\ndescribeProxy = (target, prop) => {\r\n  const handler = {\r\n    getOwnPropertyDescriptor(target, prop) {\r\n      console.log('getOwnPropertyDescriptor is accessed!!');\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet\r\n  p1 = describeProxy(obj, 'a'),\r\n  p2 = describeProxy(obj, 'b'),\r\n  p3 = describeProxy(obj2, 'c');\r\n\r\nconsole.log(Object.getOwnPropertyDescriptor(p1, 'a')) // => Descriptor Object\r\nconsole.log(Object.getOwnPropertyDescriptor(p2, 'b')) // => TypeError: non-configurable property\r\nconsole.log(Object.getOwnPropertyDescriptor(p3, 'c')) // => TypeError: non-extensible object\r\n```\r\n\r\n\r\n\r\n\r\n##### **`handler.defineProperty()`**\r\n\r\n###### Description\r\nIntercepts/Customizes `Object.defineProperty()` operation.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercept `Object.defineProperty()` Operation.\r\n *\r\n * @param  {Object} target     => target object to look for property in.\r\n * @param  {String} property   => property to define on target object.\r\n * @param  {Object} descriptor => descriptor object for the specified property.\r\n *\r\n * @return {Boolean}\r\n *    true if the property is set, false otherwise.\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. Return false in `strict mode`.\r\n *     02. Setting configurable existed property to be non-configurable.\r\n *     03. Adding/modifying non-configurable property that doesn't exist as\r\n *         non-configurable.\r\n */\r\nhandler.defineProperty(target, property, descriptor);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  obj  = {a: 1},\r\n  defineProxy;\r\n\r\nObject.defineProperty(obj, 'b', {configurable: false});\r\n\r\ndefineProxy = (target) => {\r\n  const handler = {\r\n    defineProperty(target, prop, descriptor) {\r\n      console.log('defineProperty is accessed!!');\r\n      return true;\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet p = defineProxy(obj);\r\n\r\nconsole.log(Object.defineProperty(p, 'a', {configurable: false})) // => TypeError\r\nconsole.log(Object.defineProperty(p, 'd', {configurable: false})) // => TypeError\r\nconsole.log(Object.defineProperty(p, 'b', {writable: false})) // => Object\r\n```\r\n\r\n\r\n\r\n\r\n##### **`handler.has()`**\r\n\r\n###### Description\r\nIntercepts/Customizes `in` operator lookups.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercepts/Customizes `in` operator lookups.\r\n *\r\n * @param  {Object} target     => target object to look for property in.\r\n * @param  {String} property   => property to look for in target object.\r\n *\r\n * @return {Boolean}\r\n *    true if the property exists, false otherwise.\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. Return false if the property exists.\r\n */\r\nhandler.has(target, property);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  obj  = {a: 1},\r\n  hasProxy;\r\n\r\nObject.defineProperty(obj, 'b', {configurable: false});\r\n\r\nhasProxy = (target) => {\r\n  const handler = {\r\n    has(target, prop) {\r\n      console.log('has is accessed!!');\r\n      return true;\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet p = hasProxy(obj);\r\n\r\nconsole.log('a' in p) // => has is accessed!!, true\r\n```\r\n\r\n\r\n\r\n\r\n##### **`handler.get()`**\r\n\r\n###### Description\r\nIntercepts/Customizes a property value.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercepts/Customizes a property value.\r\n *\r\n * @param  {Object} target   => target object to look for property in.\r\n * @param  {String} property => property to look for in target object.\r\n * @param  {Object} receiver => proxy object.\r\n *\r\n * @return {*}\r\n *    Any value.\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. Return different value for non-writable,\r\n *         non-configurable properties.\r\n *     02. Not returning `undefined` if the lookup property has value\r\n *         of `undefined` and non-configurable.\r\n */\r\nhandler.get(target, property, receiver);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  obj  = {a: 1},\r\n  getProxy;\r\n\r\nObject.defineProperty(obj, 'b', {configurable: false, writable:false, value: 2});\r\nObject.defineProperty(obj, 'c', {configurable: false});\r\n\r\ngetProxy = (target) => {\r\n  const handler = {\r\n    get(target, prop, proxy) {\r\n      console.log('get is accessed!!');\r\n      return 1;\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet p = getProxy(obj);\r\n\r\nconsole.log(p.a) // => get is accessed!!, 1\r\nconsole.log(p.b) // => TypeError\r\nconsole.log(p.c) // => TypeError\r\n```\r\n\r\n\r\n\r\n\r\n\r\n##### **`handler.set()`**\r\n\r\n###### Description\r\nIntercepts/Customizes setting a property.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercepts/Customizes setting a property.\r\n *\r\n * @param  {Object} target   => target object to look set property on.\r\n * @param  {String} property => property name.\r\n * @param  {*}      value    => any value.\r\n * @param  {Object} receiver => proxy object.\r\n *\r\n * @return {Boolean}\r\n *    True if the assignment process is completed\r\n *    successfully, false otherwise.\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. Setting non-writable, non-configurable properties.\r\n *     02. Setting non-configurable property that has value of `undefined`.\r\n *     03. Return false from `set` in `strict mode`.\r\n */\r\nhandler.set(target, property, value, receiver);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  obj  = {a: 1},\r\n  setProxy;\r\n\r\nObject.defineProperty(obj, 'b', {configurable: false});\r\nObject.defineProperty(obj, 'c', {configurable: false, writable: false, value: 2});\r\n\r\nsetProxy = (target) => {\r\n  const handler = {\r\n    set(target, prop, value, proxy) {\r\n      console.log('set is accessed!!');\r\n      return true;\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet p = setProxy(obj);\r\n\r\np.a = 1; // => set is accessed!!, 1\r\np.b = 1; // => TypeError\r\n```\r\n\r\n\r\n\r\n##### **`handler.deleteProperty()`**\r\n\r\n###### Description\r\nIntercepts/Customizes `delete` operator.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercepts/Customizes `delete` operator.\r\n *\r\n * @param  {Object} target   => target object to look set property on.\r\n * @param  {String} property => property name.\r\n *\r\n * @return {Boolean}\r\n *    True if the delete process is completed\r\n *    successfully, false otherwise.\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. Deleting non-configurable own properties.\r\n */\r\nhandler.deleteProperty(target, property);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  obj  = {a: 1},\r\n  delProxy;\r\n\r\nObject.defineProperty(obj, 'b', {configurable: false});\r\n\r\ndelProxy = (target) => {\r\n  const handler = {\r\n    deleteProperty(target, property) {\r\n      if (property in target) {\r\n        console.log(`Property ${property} successfully deleted!!!`);\r\n        return true\r\n      } else {\r\n        console.log(`Property ${property} not found on ${target} object`);\r\n        return false\r\n      }\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet p = delProxy(obj);\r\n\r\ndelete p.a; // => Property a successfully deleted!!!, true\r\ndelete p.b; // => TypeError\r\n```\r\n\r\n\r\n\r\n\r\n##### **`handler.ownKeys()`**\r\n\r\n###### Description\r\nIntercepts/Customizes `Reflect.ownKeys` operation.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercepts/Customizes `Reflect.ownKeys` operation.\r\n *\r\n * @param  {Object} target => target object to look for its own keys.\r\n *\r\n * @return {Boolean}\r\n *    Array of own enumerable keys.\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. Return isn't an array.\r\n *     02. Returned array containing values types other than\r\n *         `String` & `Symbol`.\r\n *     03. Returned array containing non-configurable own properties.\r\n *     04. Returned array containing non-existence keys of\r\n *         non-extensible object.\r\n */\r\nhandler.ownKeys(target);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  obj  = {a: 1},\r\n  ownProxy;\r\n\r\nObject.defineProperty(obj, 'b', {configurable: false});\r\n\r\nownProxy = (target) => {\r\n  const handler = {\r\n    ownKeys(target) {\r\n      console.log(`ownKeys is accessed!!`);\r\n      return ['a', 'b', 'c']\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet p = ownProxy(obj);\r\n\r\nconsole.log(Object.getOwnPropertyNames(obj)); // => ownKeys is accessed!!, ['a', 'b', 'c']\r\n```\r\n\r\n\r\n\r\n###### Notes\r\n- `handler.ownKeys` intercepts the following operations:\r\n  1. `Object.keys()`\r\n  2. `Object.getOwnPopertyNames()`\r\n  3. `Object.getOwnPropertySymbols()`\r\n  4. `Reflect.ownKeys()`\r\n\r\n\r\n\r\n\r\n##### **`handler.apply()`**\r\n\r\n###### Description\r\nIntercepts/Customizes function calls.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n * Intercepts/Customizes function calls.\r\n *\r\n * @param  {Object} target => target function to intercept its invocation.\r\n *\r\n * @return {*}\r\n *    Any value.\r\n */\r\nhandler.apply(target);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  fn  = function () { console.log(\"I'm not gonna show!!\") },\r\n  applyProxy;\r\n\r\napplyProxy = (target) => {\r\n  const handler = {\r\n    apply(target, thisArg, argsList) {\r\n      console.log(`Function is called`);\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet p = applyProxy(fn);\r\n\r\nconsole.log(p()); // => Function is called\r\n```\r\n\r\n\r\n\r\n\r\n\r\n##### **`handler.construct()`**\r\n\r\n###### Description\r\nIntercepts/Customizes `new` operator.\r\n\r\n\r\n###### Syntax\r\n```javascript\r\n/**\r\n Intercepts/Customizes `new` operator.\r\n *\r\n * @param  {Function} target   => constructor function/class.\r\n * @param  {Array}    argsList => array of the passed arguments to constructor.\r\n * @param  {Object}   proxy    => called proxy constructor.\r\n *\r\n * @return {Object}\r\n *\r\n * @exceptions\r\n *   + TypeError\r\n *     01. Return isn't Object.\r\n *     02. Target isn't a valid constructor.\r\n */\r\nhandler.construct(target, argsList, proxy);\r\n```\r\n\r\n\r\n\r\n###### Examples\r\n```javascript\r\nlet\r\n  C  = function () {},\r\n  constructProxy;\r\n\r\nconstructProxy = (target) => {\r\n  const handler = {\r\n    construct(target, argsList, proxy) {\r\n      console.log(`Construct is accessed`);\r\n      return {}\r\n    }\r\n  }\r\n\r\n  return new Proxy(target, handler)\r\n}\r\n\r\nlet p = constructProxy(C);\r\n\r\nconsole.log(new p()); // => Construct is accessed, Object {}\r\n```\r\n"}});