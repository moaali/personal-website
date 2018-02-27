### Subclassable Built-ins

#### Description
Built-in objects now can be subclassed, like `Array`, `Date`, `Object`.


#### Examples
```javascript
class MyArray extends Array {
    constructor(...args) {
      super(...args);
    }

    // Adding new methods to my custom Array constructor
    isEmpty() {
      return this.length === 0
    }
}

let arr = new MyArray();

arr.isEmpty() // => true
```
