### String Methods

#### Methods List
1. ##### **`String.fromCodePoint()`**
2. ##### **`String.prototype.codePointAt()`**
3. ##### **`String.prototype.startsWith(),`**
4. ##### **`String.prototype.endsWith()`**
5. ##### **`String.prototype.includes()`**
6. ##### **`String.prototype.repeat()`**
7. ##### **`String.prototype.normalize()`**
8. ##### **`String.raw()`**

##### **`String.fromCodePoint()`**

###### Description
Returns string from the provided unicode code points.

###### Syntax
```javascript
/**
 * Returns string from the provided unicode code points.
 *
 * @param  {Number} num Reference to unicode point representing a string.
 * 
 * @return {String}
 *
 * @exceptions
 *    + RangeError
 *        01. If non valid unicode code point is passed.
 */
String.fromCodePoint(num1, ..., numN)
```

###### Examples
```javascript
String.fromCodePoint(65);   // => "A"
String.fromCodePoint('_');  // => RangeError
```



##### **`String.prototype.codePointAt()`**

###### Description
Returns a non-negative integer represents Unicode code point for a string value in the specified position.

###### Syntax
```javascript
/**
 * Returns a non-negative integer represents Unicode code point
 * for a string value in the specified position.
 *
 * @param  {Number} position Index of the input value to get its code point.
 *
 * @return {Number|undefined}
 *    `Number` represents Unicode code point if found `undefined` otherwise.
 */
String.prototype.codePointAt(position)
```

###### Examples
```javascript
'AB'.codePointAt(1) // => 65
'AB'.codePointAt(3) // => undefined
```



##### **`String.prototype.startsWith()`**

###### Description
Determines if a string starts with the specified characters or not.

###### Syntax
```javascript
/**
 * Determines if a string starts with the specified characters or not.
 *
 * @param  {String} string      Characters to match.
 * @param  {Number} [position]  Index to start matching from.
 *
 * @return {Boolean}
 *    true if there's a match, false otherwise.
 */
String.prototype.startsWith(string, position)
```

###### Examples
```javascript
'ABC'.startsWith('A')    // => true
'ABC'.startsWith('B')    // => false
'BAC'.startsWith('A', 1) // => true
```



##### **`String.prototype.endsWith()`**

###### Description
Determines if a string ends with the specified characters or not.

###### Syntax
```javascript
/**
 * Determines if a string ends with the specified characters or not.
 *
 * @param  {String} string   Characters to match.
 * @param  {Number} [length] Range to search in.
 *
 * @return {Boolean}
 *    true if there's a match, false otherwise.
 */
String.prototype.endsWith(string, length)
```

###### Examples
```javascript
'ABC'.endsWith('C')    // => true
'ABC'.endsWith('B')    // => false
'BAC'.endsWith('A', 2) // => true
```



##### **`String.prototype.includes()`**

###### Description
Determines if a string is found in other string.

###### Syntax
```javascript
/**
 * Determines if a string is found in other string.
 *
 * @param  {String} string     Characters to match.
 * @param  {Number} [position] Index to start searching from.
 *
 * @return {Boolean}
 *    true if there's a match, false otherwise.
 */
String.prototype.includes(string, position)
```

###### Examples
```javascript
'ABC'.includes('C')    // => true
'ABC'.includes('D')    // => false
'BAC'.includes('A', 1) // => true
```



##### **`String.prototype.repeat()`**

###### Description
Repeats the string called on for the specified number of times.

###### Syntax
```javascript
/**
 * Repeats the string called on for the specified number of times.g.
 *
 * @param  {Number} count Number of times to repeat
 *
 * @return {String}
 *    the new string containing the repeats.
 *
 * @exceptions
 *    + RangeError
 *        01. Negative count number
 *        02. Infinity
 *        03. Maximum string size
 */
String.prototype.repeat(count)
```

###### Examples
```javascript
'ABC'.repeat(1)  // => 'ABCABC'
'ABC'.repeat(-1) // => RangeError
```



##### **`String.prototype.normalize()`**

###### Description
Method returns the Unicode Normalization Form of a given string.

###### Syntax
```javascript
/**
 * Method returns the Unicode Normalization Form of a given string.
 *
 * @param  {String} [form = 'NFC']  Unicode Normalization Form.
 *
 * @return {String}
 *    Unicode Normalization Form of the given string.
 *
 * @exceptions
 *    + RangeError
 *        01. Provided form isn't supported
 */
String.prototype.normalize(form)
```

###### Examples
```javascript
const str = '\u1E9B\u0323';
str.normalize();      // '\u1E9B\u0323'
```



##### **`String.raw()`**

###### Description
Method returns the non-parsed string of template literals.

###### Syntax
```javascript
/**
 * Method returns the non-parsed string of template literals.
 *
 * @param  {Object} callSite  Object containing `raw` property.
 * @param  {Array}  subs      Placeholders values.
 *
 * @return {String}
 *    non-parsed string.
 *
 * @exceptions
 *    + TypeError
 *        01. callSite isn't `object` containing `raw` property.
 */
 String.raw(callSite, ...subs)
 String.raw`template literals`
```

###### Examples
```javascript
String.raw({ raw: 'hello\n${x}' }, 'world'); // => "hello\\nworld"
String.raw`'hello\nworld`; // => "hello\\nworld"
```
