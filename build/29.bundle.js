webpackJsonp([29],{778:function(n,e){n.exports="### Spread / Rest Operator\n#### Spread\nExpands and expression in positions where a comma separated list are expected like function call arguments, array elements, destructuring\n\n#### Examples\n```javascript\nlet x = [3, 4]\nlet y = [1, 2, ...x] // [1, 2, 3, 4]\n\nlet args = [1, 2, 3]\ninvoke(...args) === invoke(1, 2, 3)\n```\n\n#### Rest\nUsed to convert function infinte number of arguments into array in function declarations.\n\n#### Example\n```javascript\nfunction add(...args) {\n  let total = 0;\n  args.map((num) => {\n    total += num; \n  });\n  \n  return total;\n}\n\nadd(1, 2, 3, 4) // 10\n```\n"}});