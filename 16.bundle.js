webpackJsonp([16,40],{767:function(e,n){e.exports="### Iterables & Iterators\n\n#### Description\n- **Iterable**: Object with `[Symbol.iterator]` method as own property which when called returns an iterator.\n- **Iterator**: Object containing `next` method as own property which when called returns object with two properties:\n  - **`value`**: Holds current value of the iterator.\n  - **`done`**: Boolean defines iteration process end.\n\n\n\n#### Examples\n```javascript\n/* For Demo Purposes */\nconst\n  iterator = {\n    // ...\n    next: () => {\n      // ...\n      return {\n        value : /* Any JavaScript value */,\n        done  : /* ture | false */\n      }\n    }\n  },\n\n  iterable = {\n    // ...\n    [Symbol.iterator]: () => {\n      // ...\n      return iterator\n    }\n  }\n```\n\n\n\n#### Iterable Objects\n- **`Array`**\n- **`TypedArray`**\n- **`Map`**\n- **`Set`**\n- **`NodeList`**\n- Objects returned from `entries()`, `keys()`, `values()` methods.\n\n\n\n#### Iterable Consumers\n- **`for ... of`** loop\n- **Spread Operator**\n- **Destructuring**\n\n##### Examples\n```javascript\nconst arr = [1, 2, 3];\n\nfor (elem of arr) {\n  console.log(elem) // 1, 2, 3\n}\n\nconst add = (a, b, c) => a + b + c;\nadd(...arr) // 6\n\nconst [a, b, c] = arr;\nconsole.log(a) // => 1\nconsole.log(b) // => 2\nconsole.log(c) // => 3\n```\n"},97:function(e,n,t){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(2)),a=r(t(221)),s=r(t(57)),l=r(t(767));!function(){var n=t(1).enterModule;n&&n(e)}();var c=function(){return o.default.createElement(s.default,null,o.default.createElement("div",{id:"post"},o.default.createElement("hgroup",{className:"mB-60"},o.default.createElement("h5",{className:"c-minor"},"Aug 27, 2017"),o.default.createElement("h1",{className:"c-blocker"},"ES6 Overview - Iterables & Iterators"),o.default.createElement("hr",null)),o.default.createElement(a.default,{source:l.default})))},u=c,i=u;n.default=i,function(){var n=t(1).default,r=t(1).leaveModule;n&&(n.register(c,"Es6OverviewIterablesIterators","E:\\Dropbox\\Projects\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewIterablesIterators\\index.jsx"),n.register(u,"default","E:\\Dropbox\\Projects\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewIterablesIterators\\index.jsx"),r(e))}()}).call(n,t(7)(e))}});