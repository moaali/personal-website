webpackJsonp([2,26],{111:function(n,e,t){"use strict";(function(n){function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(t(2)),s=o(t(221)),a=o(t(57)),l=o(t(781));!function(){var e=t(1).enterModule;e&&e(n)}();var i=function(){return r.default.createElement(a.default,null,r.default.createElement("div",{id:"post"},r.default.createElement("hgroup",{className:"mB-60"},r.default.createElement("h5",{className:"c-minor"},"Sep 10, 2017"),r.default.createElement("h1",{className:"c-blocker"},"ES6 Overview - Symbols"),r.default.createElement("hr",null)),r.default.createElement(s.default,{source:l.default})))},c=i,p=c;e.default=p,function(){var e=t(1).default,o=t(1).leaveModule;e&&(e.register(i,"Es6OverviewSymbols","E:\\Dropbox\\Projects\\playgrounds\\boilerplate\\src\\screens\\Blog\\components\\Es6OverviewSymbols\\index.jsx"),e.register(c,"default","E:\\Dropbox\\Projects\\playgrounds\\boilerplate\\src\\screens\\Blog\\components\\Es6OverviewSymbols\\index.jsx"),o(n))}()}).call(e,t(7)(n))},781:function(n,e){n.exports="### Symbols\n\n#### Description\nFunction that returns unique identifier of `symbol` primitive type for each call.\n\n\n#### Syntax\n```javascript\nSymbol('optional string value')\n```\n\n\n#### Usage\n- One of the usual practical usages of `Symbol()` function is generate unique identifiers for object properties.\n\n\n\n#### Examples\n```javascript\nconst obj = {\n  [Symbol()]    : 1,\n  [Symbol('y')] : 2,\n  [Symbol('z')] : 3,\n  [Symbol('z')] : 4\n}\n\nconst\n  syms  = Object.getOwnPropertySymbols(obj),\n  symZ1 = obj[syms[2]],\n  symZ2 = obj[syms[3]];\n\nconsole.log(syms)    // => [Symbol(), Symbol(y), Symbol(z), Symbol(z)]\nconsole.log(syms[2]) // => Symbol(z)\nconsole.log(syms[3]) // => Symbol(z)\nconsole.log(symZ1)   // => 3\nconsole.log(symZ2)   // => 4\n```\n\n\n\n\n#### API\n\n1. **`Symbol.iterator`**\n2. **`Symbol.match`**\n3. **`Symbol.replace`**\n4. **`Symbol.search`**\n5. **`Symbol.split`**\n6. **`Symbol.hasInstance`**\n7. **`Symbol.isConcatSpreadable`**\n8. **`Symbol.unscopables`**\n9. **`Symbol.species`**\n10. **`Symbol.toPrimitive`**\n11. **`Symbol.toStringTag`**\n12. **`Symbol.for(key)`**\n13. **`Symbol.keyFor(sym)`**\n\n\n##### **`Symbol.iterator`**\n\n###### Description\nMethod used to define iteration behavior of its owner object.\n\n\n\n###### Syntax\n```javascript\nconst obj = {\n  *[Symbol.iterator]() {\n    // ...\n  }\n}\n```\n\n\n\n###### Examples\n```javascript\nconst evenIt = {\n  *[Symbol.iterator]() {\n    for (let i = 0;; i += 2)\n      yield i\n  }\n}\n\n\n/**\n * Prints even numbers from start to end numbers.\n *\n * @param  {Number} x starting number.\n * @param  {Number} y end number.\n * @return {void}\n */\n\nconst print = (x, y) => {\n  for (let val of evenIt) {\n    if (val >= x && val <= y)\n      console.log(val);\n\n    if (val === y)\n      break;\n  }\n}\n\nprint(2, 20)\n```\n\n\n\n###### Notes\n- Exists as a build-in method on `Array`, `TypedArray`, `Map`, `Set`.\n\n\n##### **`Symbol.match`**\n\n###### Description\nMethod used to define if a RegExp object should be treated as a regular expression or just a normal string\n\n\n###### Syntax\n```javascript\nregexp[Symbol.match](str)\n```\n\n\n\n###### Examples\n```javascript\nconst re = /a/\n'/a/'.startsWith(re) // => TypeError -> Because startsWith() expects re to be a string not RegExp.\n\n// Now when modifying the behavior of `re` as string there will be no errors.\nre[Symbol.match] = false\n'/a/'.startsWith(re) // => true\n```\n\n\n\n##### **`Symbol.replace`**\n\n###### Description\nMethod used to define how `String.prototype.replace()` should work.\n\n\n###### Syntax\n```javascript\nregexp[Symbol.replace](str, newSubStr) // => true\n```\n\n\n\n###### Usage\n- This method has usually one practical usage which is defining how `String.prototype.replace()` will work when using subclasses of `RegExp` to form its regular expression patterns.\n\n\n\n###### Examples\n```javascript\nclass MyRegExp extends RegExp {\n  constructor(ptrn, flags) {\n    super(ptrn, flags);\n  }\n\n  [Symbol.replace](input, replacement) {\n    return RegExp.prototype[Symbol.replace].call(this, input, (replacement + ' REPLACEMENT')) // => Every replacement will contain 'REPLACEMENT' now\n  }\n}\n\n\nconst\n  re     = new MyRegExp(/My/, 'i'),\n  str    = 'My ',\n  newstr = str.replace(re, 'Your');\n\nconsole.log(newstr); // => 'Your REPLACEMENT'\n```\n\n\n\n##### **`Symbol.search`**\n\n###### Description\nMethod used to define how `String.prototype.search()` should work.\n\n\n###### Syntax\n```javascript\nregexp[Symbol.search](str)\n```\n\n\n\n###### Usage\n- This method has usually one practical usage which is defining how `String.prototype.search()` will work when using subclasses of `RegExp` to form its regular expression patterns.\n\n\n\n###### Examples\n```javascript\nclass MyRegExp extends RegExp {\n  constructor(ptrn, flags) {\n    super(ptrn, flags);\n    this.ptrn = ptrn\n  }\n\n  [Symbol.search](str) {\n    return `Found At : ${str.indexOf(this.ptrn)}`\n  }\n}\n\n\nconst\n  re  = new MyRegExp('My'),\n  str = 'My',\n  pos = str.search(re);\n\nconsole.log(pos); // => Found At : 0\n```\n\n\n\n##### **`Symbol.split`**\n\n###### Description\nMethod used to define how `String.prototype.split()` should work.\n\n\n###### Syntax\n```javascript\nregexp[Symbol.split](str[, limit])\n```\n\n\n\n###### Usage\n- This method has usually one practical usage which is defining how `String.prototype.split()` will work when using subclasses of `RegExp` to form its regular expression patterns.\n\n\n\n###### Examples\n```javascript\nclass MyRegExp extends RegExp {\n  [Symbol.split](str, limit) {\n    let result = RegExp.prototype[Symbol.split].call(this, str, limit)\n    return result.reduce((acc, elem) => acc + elem)\n  }\n}\n\n\nconst\n  re  = new MyRegExp('-'),\n  str = 'a-b-c-d',\n  res = str.split(re);\n\nconsole.log(res); // => abcd\n```\n\n\n\n##### **`Symbol.hasInstance`**\n\n###### Description\nMethod used to customize the behavior of `instanceof` operator.\n\n\n###### Syntax\n```javascript\n[Symbol.hasInstance](instance)\n```\n\n\n\n###### Usage\n- This method has usually one practical usage which is defining how `instanceof` operator will work when defining classes and what objects should be instances of it.\n\n\n\n###### Examples\n```javascript\nclass MyObject {\n  static [Symbol.hasInstance](ins) {\n    return ins.toString() === '[object Object]'\n  }\n}\n\nconsole.log({} instanceof MyObject); // => true\n```\n\n\n\n##### **`Symbol.isConcatSpreadable`**\n\n###### Description\nProperty with boolean value used to define if the target object (array / array-like) should be spreaded/flattened when used with methods like `Array.prototype.concat()`.\n\n\n###### Syntax\n```javascript\nobj[Symbol.isConcatSpreadable] = true/false\n```\n\n\n\n###### Examples\n```javascript\nconst\n  arr = [1, 2, 3],\n  arrLike = {\n    length: 2,\n    0: 'a',\n    1: 'b'\n  };\n\narr[Symbol.isConcatSpreadable] = false;\narrLike[Symbol.isConcatSpreadable] = true;\n\nconst x = arr.concat(arrLike)\nconst y = x.concat(arr)\n\nconsole.log(x) // => [[1, 2, 3], 'a', 'b']\nconsole.log(y) // => [[1, 2, 3], 'a', 'b', [1, 2, 3]]\n```\n\n\n\n##### **`Symbol.unscopables`**\n\n###### Description\nProperty with object value used to define which own/inherited object properties should be available inside `with` statsment.\n\n\n###### Syntax\n```javascript\nobj[Symbol.unscopables] = { propName: Boolean, ... }\n```\n\n\n\n###### Examples\n```javascript\nconst\n  obj = {\n    a: 0,\n    b: 1\n  };\n\nobj[Symbol.unscopables] = {\n  a: false,\n  b: true\n}\n\nwith (obj) {\n  console.log(a) // => 0\n  console.log(b) // ReferenceError\n}\n```\n\n\n\n##### **`Symbol.species`**\n\n###### Description\nFunction valued property used to define the constructor of the derived objects from their original objects.\n\n\n###### Syntax\n```javascript\n[Symbol.species] () { /* code... */ }\n```\n\n\n###### Usage\n- One of the possible usages of `Symbol.species` is make a copy of the built-in objects in JavaScript like `Object`, `Array`, `Promise` ...etc, and add on them your custom implementations without having to polluting the original built-in objects.\n\n\n\n###### Examples\n```javascript\nclass MyArray extends Array {\n  static get [Symbol.species]() {\n    return Array\n  }\n\n  isEmpty() {\n    return this.length === 0\n  }\n}\n\nclass MyArray2 extends Array {\n  isEmpty() {\n    return this.length === 0\n  }\n}\n\nlet arr     = new MyArray(1,2,3);   // Original objects\nlet arr2    = new MyArray2(1,2,3);  // Original objects\nlet mapped  = arr.map(e => e * 2);  // Derived objects\nlet mapped2 = arr2.map(e => e * 2); // Derived objects\n\nconsole.log( mapped instanceof MyArray )   // => false\nconsole.log( mapped instanceof Array )     // => true\nconsole.log( mapped2 instanceof MyArray2 ) // => true\nconsole.log( mapped2 instanceof Array )    // => true\n```\n\n\n\n##### **`Symbol.toPrimitive`**\n\n###### Description\nFunction valued property used to define how JavaScript type coercion should work. it takes one argument which is `hint` that can be one of three values `string`, `number`, `default`.\n\n\n###### Syntax\n```javascript\n[Symbol.toPrimitive] (hint) { /* code... */ }\n```\n\n\n\n###### Examples\n```javascript\nlet obj = {}\nconsole.log(+obj)     // => NaN\nconsole.log(`${obj}`) // => \"[oject Object]\"\nconsole.log(obj + '') // => \"[oject Object]\"\n\nobj[Symbol.toPrimitive] = hint => {\n  switch(hint) {\n    case 'number':\n      return 1;\n      break;\n    case 'string':\n      return 'obj';\n      break;\n    case 'default':\n      return true;\n      break;\n  }\n}\n\nconsole.log(+obj)     // => 1\nconsole.log(`${obj}`) // => \"obj\"\nconsole.log('' + obj) // => \"true\"\n```\n\n\n\n##### **`Symbol.toStringTag`**\n\n###### Description\nFunction valued property used to define a string description of an object. it's used to customize how the `Object.prototype.toString()` method return value.\n\n\n###### Syntax\n```javascript\n[Symbol.toStringTag] () { return ... }\n```\n\n\n\n###### Examples\n```javascript\nclass MyClass1 {}\nclass MyClass2 {\n  get [Symbol.toStringTag] () {\n    return 'MyClass2'\n  }\n}\nconst x = new MyClass1();\nconst y = new MyClass2();\n\nx.toString() // => \"[object Object]\"\ny.toString() // => \"[object MyClass2]\"\n                         // ^-------- Tag is now pointing to the return of `@@toStringTag`\n```\n\n\n\n##### **`Symbol.for`**\n\n###### Description\nChecks for the existence of a specified `Symbol` in the global symbols registry and return that `Symbol` if it's found or creates it then return it if not found.\n\n\n###### Syntax\n```javascript\nSymbol.for(string) \n```\n\n\n\n###### Examples\n```javascript\nSymbol.for('x') === Symbol.for('x') // => true -> Symbol(x)\nSymbol('x') === Symbol('x') // => false\n```\n\n\n\n##### **`Symbol.keyFor`**\n\n###### Description\nRetrieves the key used to create the global registry symbol if found otherwise `undefined`.\n\n\n###### Syntax\n```javascript\nSymbol.keyFor(Symbol)\n```\n\n\n###### Examples\n```javascript\nconst\n  sym = Symbol.for('x'),\n  locSym = Symbol('y'),\n  it = Symbol.iterator;\n\nconsole.log(Symbol.keyFor(sym));    // => X         - found in the global registry\nconsole.log(Symbol.keyFor(locSym)); // => undefined - local symbol not found on the global registry\nconsole.log(Symbol.keyFor(it));     // => undefined - well-known symbol not found on the global registry\n```\n"}});