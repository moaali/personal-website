### Array Methods

#### Methods List
- Array.from
- Array.of
- Array.prototype.fill
- Array.prototype.find
- Array.prototype.findIndex
- Array.prototype.entries
- Array.prototype.keys
- Array.prototype.copyWithin


#### `Array.from`

##### Description
Method used to create an array from array-like & iterable objects.


##### Syntax
```javascript
Array.from( obj,
            mapFunction ?= undefined,
            context ?= enclosing context ) // => array of the provided input
```


##### Examples
```javascript
let
  arrLike  = { 0: 'zero', 1: 'one', length: 2 },
  iterable = 'iterable',
  fn = function () {
    let args = Array.from( arguments );
    console.log( args )
  };

Array.from( arrLike, (val, idx) => (val += ' in digits ' + idx)) // ['zero in digits 0', 'one in digits 1']
Array.from( iterable )// ['i','t','e','r','a','b','l','e']
fn(1, 2) // [1, 2]
```



#### `Array.of`

##### Description
Method used to create an array from its passed arguments regardless of their type.


##### Syntax
```javascript
Array.of(elm0[, elem1, ... elemN]) // => array of arguments
```


##### Examples
```javascript
Array.of(1, 'string', false, undefined, null, new Date(), {x: 0}, [1]) // [1, "string", false, undefined, null, "3030-01-01:)", {x:0}, [1]]
```



#### `Array.prototype.fill`

##### Description
Method used to change array slots values to the passed value from a starting index to end index.


##### Syntax
```javascript
arr.fill( val,
          start ?= 0,
          end   ?= arr.length ) // => new filled array
```


##### Examples
```javascript
[1, 2, 3].fill(0)           // [0,0,0]
[1, 2, 3].fill(0, 1)        // [1,0,0]
[1, 2, 3].fill(0, 1, 2)     // [1,0,3]
[1, 2, 3].fill(0, -1)       // [1,2,0]
[1, 2, 3].fill(0, -1, -2)   // [1,2,3]
[1, 2, 3].fill(0, -5, -10)  // [1,2,3]
```



#### `Array.prototype.find`

##### Description
Method used to find an first element that passes a test function in a given array.


##### Syntax
```javascript
arr.find( testFN(element, index, arr),
          context ?= undefined ) // => the first matched element value
```


##### Examples
```javascript
let
  arr = [1, 2, 3, 4],
  testFN = (elem) => elem % 2 === 0;

// find the first even numer in the array
arr.find(testFN); // 2
```



#### `Array.prototype.findIndex`

##### Description
Method used to find an first element **index** that passes a test function in a given array.


##### Syntax
```javascript
arr.findIndex(testFN(element, index, arr),
              context ?= undefined) // => the first matched element value
```


##### Examples
```javascript
let
  arr = [1, 2, 3, 4],
  testFN = (elem) => elem % 2 === 0;

// find the index of the first even numer in the array
arr.findIndex(testFN); // 1
```



#### `Array.prototype.entries`

##### Description
Method used to create array iterator from key/value pairs of the provided array.


##### Syntax
```javascript
arr.entries() // => Array Iterator
```


##### Examples
```javascript
let it = [1, 2, 3, 4].entries();
it.next().value; // [0, 1]
it.next().value; // [1, 2]
it.next().value; // [2, 3]
it.next().value; // [3, 4]
```



#### `Array.prototype.keys`

##### Description
Method used to create array iterator from indexes of the provided array.


##### Syntax
```javascript
arr.keys() // => Array Iterator
```


##### Examples
```javascript
let it = [1, 2, 3, 4].keys();
it.next().value; // 0
it.next().value; // 1
it.next().value; // 2
it.next().value; // 3
```



#### `Array.prototype.copyWithin`

##### Description
Method used to copy array or array-like elements from one position to another inside the same array.


##### Syntax
```javascript
arr.copyWithin( targetIndex,
                start ?= 0,
                end ?= arr.length ) // => new formated array
```


##### Examples
```javascript
let
  arr = [1, 2, 3, 4, 5],
  arrLike = { 0: 1, 1: 2, 2: 3, length: 3 }

arr.copyWithin(0, 3) // => [4, 5, 3, 4, 5]
[].copyWithin.call(arrLike, 0, 2) // => { 0: 3, 1: 2, 2: 3, length: 3 }
```
