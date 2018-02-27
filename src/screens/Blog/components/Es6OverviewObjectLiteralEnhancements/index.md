### Object Literal Enhancements

#### Description
Object literals now supports setting the prototype at construction time, shorthand assignments, shorthand methods, super calls and computed property names.

#### Examples
```javascript
const
  key = 'key',
  prop = 'value',
  Prototype = Object.create(null),
  obj = {
    __proto__: Prototype,      // Setting prototype at construction
    prop,                      // Shorthand property for prop: prop
    method() {}                // Shorthand method for method : function () {}
    toString() {
     return super.toString();  // Super call is supported
    },
    [key]: 42                  // Computed property naming
  };
```
