### New Statments

#### `for ... of`

##### Description
Statement used to loop over an *iterable object* and provide a hook to each one of its property to do something with.

##### Syntax
for ( value of iterable ) {
  // do some thing using `value`
}

##### Example
```javascript
cont arr = [1, 2, 3]

for (let val of arr) {
  val *= 2
  console.log(val)
} // 2   4   6
```
