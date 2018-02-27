webpackJsonp([27],{780:function(n,r){n.exports="### Subclassable Built-ins\n\n#### Description\nBuilt-in objects now can be subclassed, like `Array`, `Date`, `Object`.\n\n\n#### Examples\n```javascript\nclass MyArray extends Array {\n    constructor(...args) {\n      super(...args);\n    }\n\n    // Adding new methods to my custom Array constructor\n    isEmpty() {\n      return this.length === 0\n    }\n}\n\nlet arr = new MyArray();\n\narr.isEmpty() // => true\n```\n"}});