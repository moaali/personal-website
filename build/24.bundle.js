webpackJsonp([24],{783:function(n,e){n.exports="### Template Literals\n\n#### Description\nSpecial type of string literals with the capability of holding embedded expressions and optionally parsed by custom function called tag function.\n\n\n#### Example\n```javascript\nlet string = `contents`;\n```\n\n\n\n#### Substitution Expressions (Placeholders)\nJavaScript expressions that can be parsed at runtime inside template literals and initiated by `${ expression }`.\n\n##### Example\n```javascript\nlet greeting = 'Hello';\nconsole.log( `${greeting} Developer!` );\n```\n\n\n\n#### Tagged Template Literals\nCustom function used to control parsing template literal.\n\n##### Syntax\n```javascript\nlet parseResult = TAG_FUNCTION_NAME`contents`;\n```\n\n##### Example\n```javascript\nconst\n  name = 'Neo',\n  HTMLEscaped = escape`<div>I'm ${name}</div>`\n\n/**\n * Custom function used to escape HTML angles\n *\n * @param  {array} strings\n *    Array of template literal string parts with `row` property containing\n *    array of the same values but without parsing backslash escape sequences.\n * @param  {array} subs\n *    Array containing all substitution expressions parsed values.\n * @return {string} the newly parsed template literal contents.\n */\nfunction escape( strings, ...subs ) {\n  const results = [];\n\n  strings = strings.map((string) => {\n    let escapedString = string.replace(/</i, '&lt;').replace(/>/i, '&gt;')\n    return escapedString;\n  });\n\n  for ( const i of strings ) {\n    results.push( i, subs[strings.indexOf(i)] || '' )\n  }\n\n  return results.join('');\n}\n\nconsole.log( HTMLEscaped ); // &lt;div&gt;I'm Neo&lt;/div&gt;\n```\n\n\n#### Raw String\nMethod used to access template literal string contents without parsing backslash escape sequences (i.e. the source code as you type it in the script  file).\n\n##### Example\n```javascript\nconsole.log(`My name is ${'NEO'}.\\n\\nand I've no choice`)\n// My name is NEO.\n//\n// and I've no choice\nconsole.log(String.raw`My name is ${'NEO'}.\\n\\nand I've no choice`)\n// My name is NEO.\\n\\nand I've no choice\n```\n"}});