webpackJsonp([30],{777:function(r,e){r.exports="### Setter\r\n\r\n#### Description\r\nMethod that's invoked when a property is added to certain object.\r\n\r\n- Must have only one parameter.\r\n- Can be deleted via delete operator on the related property.\r\n\r\n#### Syntax\r\n```javascript\r\n/**\r\n * Method that's invoked when a property is added to certain object.\r\n *\r\n * @param  {*} val Reference to the value setted by user\r\n * @return {void}\r\n */\r\n{set propName(val) {}}\r\n{set [computedProp](val) {}}\r\n```\r\n\r\n#### Examples\r\n```javascript\r\nconst obj = {\r\n  a: 1,\r\n  set b(val) {\r\n    console('b property is assigned a value')\r\n  }\r\n}\r\n\r\nobj.b = 2 // => b property is assigned a value\r\n```\r\n"}});