webpackJsonp([21,45],{762:function(e,n){e.exports="### Classes\r\n\r\n#### Description\r\nSyntactic sugar for prototypal inheritance in JavaScript.\r\n\r\n\r\n#### `class`\r\nReserved keyword used to define a constructor class.\r\n\r\n##### Example\r\n\r\n``` javascript\r\nclass ClassName {\r\n  // ...\r\n}\r\n```\r\n\r\n##### Notes\r\n- `class` name binding inside its scope is `const` binding and `let` binding outside.\r\n- `class` can't be called directly as functions do (i.e. `ClassName()` throws).\r\n\r\n#### `constructor()`\r\nMethod used once inside a class to define properties and methods on it.\r\n\r\n##### Example\r\n\r\n``` javascript\r\nclass ClassName {\r\n  constructor() {\r\n    this.name = 'ClassName';\r\n  }\r\n}\r\n```\r\n\r\n##### Notes\r\n- `constructor` method can't be used with `static` keyword.\r\n- `constructor` method can only be used **once** inside class.\r\n- Methods defined outside `constructor` is set on the class prototype.\r\n\r\n\r\n#### `extends`\r\nReserved keyword used when deriving subclasses from a superclass.\r\n\r\n##### Example\r\n\r\n``` javascript\r\nclass Parent {\r\n  // ...\r\n}\r\n\r\nclass Child extends Parent {\r\n  // ...\r\n}\r\n```\r\n\r\n##### Notes\r\n- Methods defined on the super class are accessible by its subclasses.\r\n\r\n#### `super`\r\nReserved keyword used inside subclasses or object literals as a reference for their superclass, or their prototypes in case of object literals.\r\n\r\n##### Example\r\n\r\n``` javascript\r\nclass Parent {\r\n  constructor(kind) {\r\n    this.kind = kind\r\n  }\r\n}\r\n\r\nclass Child extends Parent {\r\n  constructor(childName, parentKind) {\r\n    super(parentKind);\r\n    this.name = childName;\r\n  }\r\n\r\n  sayName() {\r\n    console.log( 'My Name is ' + this.name + ' and I\\'m ' + this.kind );\r\n  }\r\n}\r\n\r\nlet baby = new Child('John', 'Human');\r\nbaby.sayName(); // My Name is John and I'm Human\r\n```\r\n\r\n``` javascript\r\nconst\r\n  Parent = {\r\n    kind: 'Human'\r\n  },\r\n\r\n  Child = {\r\n    name: 'John',\r\n    sayName() {\r\n      console.log( 'My Name is ' + this.name + ' and I\\'m ' + super.kind )\r\n    }\r\n  };\r\n\r\nObject.setPrototypeOf(Child, Parent);\r\nChild.sayName(); // My Name is John and I'm Human\r\n```\r\n\r\n##### Notes\r\n- You can't access superclass properties/methods before invoking `super()` method first inside subclass constructor.\r\n\r\n\r\n#### `static`\r\nReserved keyword used to define (static methods) methods accessible only by classes themselves not their instances.\r\n\r\n##### Example\r\n\r\n``` javascript\r\nclass Parent {\r\n  static sayName(name) {\r\n    console.log(name);\r\n  }\r\n}\r\n\r\nParent.sayName('Doe'); // Doe\r\n\r\nconst parentName = new Parent();\r\nparentName.sayName('Doe'); // TypeError\r\n```\r\n\r\n##### Notes\r\n- Static methods are reserved for their respective class and can't be accessed inside its instances.\r\n"},92:function(e,n,r){"use strict";(function(e){function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=s(r(2)),t=s(r(221)),o=s(r(57)),c=s(r(762));!function(){var n=r(1).enterModule;n&&n(e)}();var i=function(){return a.default.createElement(o.default,null,a.default.createElement("div",{id:"post"},a.default.createElement("hgroup",{className:"mB-60"},a.default.createElement("h5",{className:"c-minor"},"Jul 01, 2017"),a.default.createElement("h1",{className:"c-blocker"},"ES6 Overview - Classes"),a.default.createElement("hr",null)),a.default.createElement(t.default,{source:c.default})))},l=i,d=l;n.default=d,function(){var n=r(1).default,s=r(1).leaveModule;n&&(n.register(i,"Es6OverviewClasses","E:\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewClasses\\index.jsx"),n.register(l,"default","E:\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewClasses\\index.jsx"),s(e))}()}).call(n,r(7)(e))}});