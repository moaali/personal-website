### Template Literals

#### Description
Special type of string literals with the capability of holding embedded expressions and optionally parsed by custom function called tag function.


#### Example
```javascript
let string = `contents`;
```



#### Substitution Expressions (Placeholders)
JavaScript expressions that can be parsed at runtime inside template literals and initiated by `${ expression }`.

##### Example
```javascript
let greeting = 'Hello';
console.log( `${greeting} Developer!` );
```



#### Tagged Template Literals
Custom function used to control parsing template literal.

##### Syntax
```javascript
let parseResult = TAG_FUNCTION_NAME`contents`;
```

##### Example
```javascript
const
  name = 'Neo',
  HTMLEscaped = escape`<div>I'm ${name}</div>`

/**
 * Custom function used to escape HTML angles
 *
 * @param  {array} strings
 *    Array of template literal string parts with `row` property containing
 *    array of the same values but without parsing backslash escape sequences.
 * @param  {array} subs
 *    Array containing all substitution expressions parsed values.
 * @return {string} the newly parsed template literal contents.
 */
function escape( strings, ...subs ) {
  const results = [];

  strings = strings.map((string) => {
    let escapedString = string.replace(/</i, '&lt;').replace(/>/i, '&gt;')
    return escapedString;
  });

  for ( const i of strings ) {
    results.push( i, subs[strings.indexOf(i)] || '' )
  }

  return results.join('');
}

console.log( HTMLEscaped ); // &lt;div&gt;I'm Neo&lt;/div&gt;
```


#### Raw String
Method used to access template literal string contents without parsing backslash escape sequences (i.e. the source code as you type it in the script  file).

##### Example
```javascript
console.log(`My name is ${'NEO'}.\n\nand I've no choice`)
// My name is NEO.
//
// and I've no choice
console.log(String.raw`My name is ${'NEO'}.\n\nand I've no choice`)
// My name is NEO.\n\nand I've no choice
```
