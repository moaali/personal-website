webpackJsonp([40],{767:function(n,e){n.exports="### Iterables & Iterators\n\n#### Description\n- **Iterable**: Object with `[Symbol.iterator]` method as own property which when called returns an iterator.\n- **Iterator**: Object containing `next` method as own property which when called returns object with two properties:\n  - **`value`**: Holds current value of the iterator.\n  - **`done`**: Boolean defines iteration process end.\n\n\n\n#### Examples\n```javascript\n/* For Demo Purposes */\nconst\n  iterator = {\n    // ...\n    next: () => {\n      // ...\n      return {\n        value : /* Any JavaScript value */,\n        done  : /* ture | false */\n      }\n    }\n  },\n\n  iterable = {\n    // ...\n    [Symbol.iterator]: () => {\n      // ...\n      return iterator\n    }\n  }\n```\n\n\n\n#### Iterable Objects\n- **`Array`**\n- **`TypedArray`**\n- **`Map`**\n- **`Set`**\n- **`NodeList`**\n- Objects returned from `entries()`, `keys()`, `values()` methods.\n\n\n\n#### Iterable Consumers\n- **`for ... of`** loop\n- **Spread Operator**\n- **Destructuring**\n\n##### Examples\n```javascript\nconst arr = [1, 2, 3];\n\nfor (elem of arr) {\n  console.log(elem) // 1, 2, 3\n}\n\nconst add = (a, b, c) => a + b + c;\nadd(...arr) // 6\n\nconst [a, b, c] = arr;\nconsole.log(a) // => 1\nconsole.log(b) // => 2\nconsole.log(c) // => 3\n```\n"}});