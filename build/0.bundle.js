webpackJsonp([0,24],{113:function(e,n,r){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=t(r(2)),a=t(r(221)),i=t(r(783)),l=t(r(57));!function(){var n=r(1).enterModule;n&&n(e)}();var o=function(){return s.default.createElement(l.default,null,s.default.createElement("div",{id:"post"},s.default.createElement("hgroup",{className:"mB-60"},s.default.createElement("h5",{className:"c-minor"},"Jul 08, 2017"),s.default.createElement("h1",{className:"c-blocker"},"ES6 Overview - Template Literals"),s.default.createElement("hr",null)),s.default.createElement(a.default,{source:i.default})))},c=o,u=c;n.default=u,function(){var n=r(1).default,t=r(1).leaveModule;n&&(n.register(o,"Es6OverviewTemplateLiterals","E:\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewTemplateLiterals\\index.jsx"),n.register(c,"default","E:\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewTemplateLiterals\\index.jsx"),t(e))}()}).call(n,r(7)(e))},783:function(e,n){e.exports="### Template Literals\r\n\r\n#### Description\r\nSpecial type of string literals with the capability of holding embedded expressions and optionally parsed by custom function called tag function.\r\n\r\n\r\n#### Example\r\n```javascript\r\nlet string = `contents`;\r\n```\r\n\r\n\r\n\r\n#### Substitution Expressions (Placeholders)\r\nJavaScript expressions that can be parsed at runtime inside template literals and initiated by `${ expression }`.\r\n\r\n##### Example\r\n```javascript\r\nlet greeting = 'Hello';\r\nconsole.log( `${greeting} Developer!` );\r\n```\r\n\r\n\r\n\r\n#### Tagged Template Literals\r\nCustom function used to control parsing template literal.\r\n\r\n##### Syntax\r\n```javascript\r\nlet parseResult = TAG_FUNCTION_NAME`contents`;\r\n```\r\n\r\n##### Example\r\n```javascript\r\nconst\r\n  name = 'Neo',\r\n  HTMLEscaped = escape`<div>I'm ${name}</div>`\r\n\r\n/**\r\n * Custom function used to escape HTML angles\r\n *\r\n * @param  {array} strings\r\n *    Array of template literal string parts with `row` property containing\r\n *    array of the same values but without parsing backslash escape sequences.\r\n * @param  {array} subs\r\n *    Array containing all substitution expressions parsed values.\r\n * @return {string} the newly parsed template literal contents.\r\n */\r\nfunction escape( strings, ...subs ) {\r\n  const results = [];\r\n\r\n  strings = strings.map((string) => {\r\n    let escapedString = string.replace(/</i, '&lt;').replace(/>/i, '&gt;')\r\n    return escapedString;\r\n  });\r\n\r\n  for ( const i of strings ) {\r\n    results.push( i, subs[strings.indexOf(i)] || '' )\r\n  }\r\n\r\n  return results.join('');\r\n}\r\n\r\nconsole.log( HTMLEscaped ); // &lt;div&gt;I'm Neo&lt;/div&gt;\r\n```\r\n\r\n\r\n#### Raw String\r\nMethod used to access template literal string contents without parsing backslash escape sequences (i.e. the source code as you type it in the script  file).\r\n\r\n##### Example\r\n```javascript\r\nconsole.log(`My name is ${'NEO'}.\\n\\nand I've no choice`)\r\n// My name is NEO.\r\n//\r\n// and I've no choice\r\nconsole.log(String.raw`My name is ${'NEO'}.\\n\\nand I've no choice`)\r\n// My name is NEO.\\n\\nand I've no choice\r\n```\r\n"}});