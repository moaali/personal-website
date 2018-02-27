webpackJsonp([41],{766:function(n,e){n.exports="### Getter\n\n#### Description\nMethod that's invoked when a property is looked up in certain object.\n\n- Can't have any parameters.\n- Can be deleted via delete operator on the related property.\n\n#### Syntax\n```javascript\n{get propName() {}}\n{get [computedProp]() {}}\n```\n\n#### Examples\n```javascript\nconst obj = {\n  a: 1,\n  get b() {\n    console('b property is looked up!!')\n    return 2\n  }\n}\n\nobj.b // => b property is looked up!!, 2\n```\n"}});