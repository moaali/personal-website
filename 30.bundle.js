webpackJsonp([30],{777:function(e,n){e.exports="### Setter\n\n#### Description\nMethod that's invoked when a property is added to certain object.\n\n- Must have only one parameter.\n- Can be deleted via delete operator on the related property.\n\n#### Syntax\n```javascript\n/**\n * Method that's invoked when a property is added to certain object.\n *\n * @param  {*} val Reference to the value setted by user\n * @return {void}\n */\n{set propName(val) {}}\n{set [computedProp](val) {}}\n```\n\n#### Examples\n```javascript\nconst obj = {\n  a: 1,\n  set b(val) {\n    console('b property is assigned a value')\n  }\n}\n\nobj.b = 2 // => b property is assigned a value\n```\n"}});