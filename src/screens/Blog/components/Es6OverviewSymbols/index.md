### Symbols

#### Description
Function that returns unique identifier of `symbol` primitive type for each call.


#### Syntax
```javascript
Symbol('optional string value')
```


#### Usage
- One of the usual practical usages of `Symbol()` function is generate unique identifiers for object properties.



#### Examples
```javascript
const obj = {
  [Symbol()]    : 1,
  [Symbol('y')] : 2,
  [Symbol('z')] : 3,
  [Symbol('z')] : 4
}

const
  syms  = Object.getOwnPropertySymbols(obj),
  symZ1 = obj[syms[2]],
  symZ2 = obj[syms[3]];

console.log(syms)    // => [Symbol(), Symbol(y), Symbol(z), Symbol(z)]
console.log(syms[2]) // => Symbol(z)
console.log(syms[3]) // => Symbol(z)
console.log(symZ1)   // => 3
console.log(symZ2)   // => 4
```




#### API

1. **`Symbol.iterator`**
2. **`Symbol.match`**
3. **`Symbol.replace`**
4. **`Symbol.search`**
5. **`Symbol.split`**
6. **`Symbol.hasInstance`**
7. **`Symbol.isConcatSpreadable`**
8. **`Symbol.unscopables`**
9. **`Symbol.species`**
10. **`Symbol.toPrimitive`**
11. **`Symbol.toStringTag`**
12. **`Symbol.for(key)`**
13. **`Symbol.keyFor(sym)`**


##### **`Symbol.iterator`**

###### Description
Method used to define iteration behavior of its owner object.



###### Syntax
```javascript
const obj = {
  *[Symbol.iterator]() {
    // ...
  }
}
```



###### Examples
```javascript
const evenIt = {
  *[Symbol.iterator]() {
    for (let i = 0;; i += 2)
      yield i
  }
}


/**
 * Prints even numbers from start to end numbers.
 *
 * @param  {Number} x starting number.
 * @param  {Number} y end number.
 * @return {void}
 */

const print = (x, y) => {
  for (let val of evenIt) {
    if (val >= x && val <= y)
      console.log(val);

    if (val === y)
      break;
  }
}

print(2, 20)
```



###### Notes
- Exists as a build-in method on `Array`, `TypedArray`, `Map`, `Set`.


##### **`Symbol.match`**

###### Description
Method used to define if a RegExp object should be treated as a regular expression or just a normal string


###### Syntax
```javascript
regexp[Symbol.match](str)
```



###### Examples
```javascript
const re = /a/
'/a/'.startsWith(re) // => TypeError -> Because startsWith() expects re to be a string not RegExp.

// Now when modifying the behavior of `re` as string there will be no errors.
re[Symbol.match] = false
'/a/'.startsWith(re) // => true
```



##### **`Symbol.replace`**

###### Description
Method used to define how `String.prototype.replace()` should work.


###### Syntax
```javascript
regexp[Symbol.replace](str, newSubStr) // => true
```



###### Usage
- This method has usually one practical usage which is defining how `String.prototype.replace()` will work when using subclasses of `RegExp` to form its regular expression patterns.



###### Examples
```javascript
class MyRegExp extends RegExp {
  constructor(ptrn, flags) {
    super(ptrn, flags);
  }

  [Symbol.replace](input, replacement) {
    return RegExp.prototype[Symbol.replace].call(this, input, (replacement + ' REPLACEMENT')) // => Every replacement will contain 'REPLACEMENT' now
  }
}


const
  re     = new MyRegExp(/My/, 'i'),
  str    = 'My ',
  newstr = str.replace(re, 'Your');

console.log(newstr); // => 'Your REPLACEMENT'
```



##### **`Symbol.search`**

###### Description
Method used to define how `String.prototype.search()` should work.


###### Syntax
```javascript
regexp[Symbol.search](str)
```



###### Usage
- This method has usually one practical usage which is defining how `String.prototype.search()` will work when using subclasses of `RegExp` to form its regular expression patterns.



###### Examples
```javascript
class MyRegExp extends RegExp {
  constructor(ptrn, flags) {
    super(ptrn, flags);
    this.ptrn = ptrn
  }

  [Symbol.search](str) {
    return `Found At : ${str.indexOf(this.ptrn)}`
  }
}


const
  re  = new MyRegExp('My'),
  str = 'My',
  pos = str.search(re);

console.log(pos); // => Found At : 0
```



##### **`Symbol.split`**

###### Description
Method used to define how `String.prototype.split()` should work.


###### Syntax
```javascript
regexp[Symbol.split](str[, limit])
```



###### Usage
- This method has usually one practical usage which is defining how `String.prototype.split()` will work when using subclasses of `RegExp` to form its regular expression patterns.



###### Examples
```javascript
class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    let result = RegExp.prototype[Symbol.split].call(this, str, limit)
    return result.reduce((acc, elem) => acc + elem)
  }
}


const
  re  = new MyRegExp('-'),
  str = 'a-b-c-d',
  res = str.split(re);

console.log(res); // => abcd
```



##### **`Symbol.hasInstance`**

###### Description
Method used to customize the behavior of `instanceof` operator.


###### Syntax
```javascript
[Symbol.hasInstance](instance)
```



###### Usage
- This method has usually one practical usage which is defining how `instanceof` operator will work when defining classes and what objects should be instances of it.



###### Examples
```javascript
class MyObject {
  static [Symbol.hasInstance](ins) {
    return ins.toString() === '[object Object]'
  }
}

console.log({} instanceof MyObject); // => true
```



##### **`Symbol.isConcatSpreadable`**

###### Description
Property with boolean value used to define if the target object (array / array-like) should be spreaded/flattened when used with methods like `Array.prototype.concat()`.


###### Syntax
```javascript
obj[Symbol.isConcatSpreadable] = true/false
```



###### Examples
```javascript
const
  arr = [1, 2, 3],
  arrLike = {
    length: 2,
    0: 'a',
    1: 'b'
  };

arr[Symbol.isConcatSpreadable] = false;
arrLike[Symbol.isConcatSpreadable] = true;

const x = arr.concat(arrLike)
const y = x.concat(arr)

console.log(x) // => [[1, 2, 3], 'a', 'b']
console.log(y) // => [[1, 2, 3], 'a', 'b', [1, 2, 3]]
```



##### **`Symbol.unscopables`**

###### Description
Property with object value used to define which own/inherited object properties should be available inside `with` statsment.


###### Syntax
```javascript
obj[Symbol.unscopables] = { propName: Boolean, ... }
```



###### Examples
```javascript
const
  obj = {
    a: 0,
    b: 1
  };

obj[Symbol.unscopables] = {
  a: false,
  b: true
}

with (obj) {
  console.log(a) // => 0
  console.log(b) // ReferenceError
}
```



##### **`Symbol.species`**

###### Description
Function valued property used to define the constructor of the derived objects from their original objects.


###### Syntax
```javascript
[Symbol.species] () { /* code... */ }
```


###### Usage
- One of the possible usages of `Symbol.species` is make a copy of the built-in objects in JavaScript like `Object`, `Array`, `Promise` ...etc, and add on them your custom implementations without having to polluting the original built-in objects.



###### Examples
```javascript
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array
  }

  isEmpty() {
    return this.length === 0
  }
}

class MyArray2 extends Array {
  isEmpty() {
    return this.length === 0
  }
}

let arr     = new MyArray(1,2,3);   // Original objects
let arr2    = new MyArray2(1,2,3);  // Original objects
let mapped  = arr.map(e => e * 2);  // Derived objects
let mapped2 = arr2.map(e => e * 2); // Derived objects

console.log( mapped instanceof MyArray )   // => false
console.log( mapped instanceof Array )     // => true
console.log( mapped2 instanceof MyArray2 ) // => true
console.log( mapped2 instanceof Array )    // => true
```



##### **`Symbol.toPrimitive`**

###### Description
Function valued property used to define how JavaScript type coercion should work. it takes one argument which is `hint` that can be one of three values `string`, `number`, `default`.


###### Syntax
```javascript
[Symbol.toPrimitive] (hint) { /* code... */ }
```



###### Examples
```javascript
let obj = {}
console.log(+obj)     // => NaN
console.log(`${obj}`) // => "[oject Object]"
console.log(obj + '') // => "[oject Object]"

obj[Symbol.toPrimitive] = hint => {
  switch(hint) {
    case 'number':
      return 1;
      break;
    case 'string':
      return 'obj';
      break;
    case 'default':
      return true;
      break;
  }
}

console.log(+obj)     // => 1
console.log(`${obj}`) // => "obj"
console.log('' + obj) // => "true"
```



##### **`Symbol.toStringTag`**

###### Description
Function valued property used to define a string description of an object. it's used to customize how the `Object.prototype.toString()` method return value.


###### Syntax
```javascript
[Symbol.toStringTag] () { return ... }
```



###### Examples
```javascript
class MyClass1 {}
class MyClass2 {
  get [Symbol.toStringTag] () {
    return 'MyClass2'
  }
}
const x = new MyClass1();
const y = new MyClass2();

x.toString() // => "[object Object]"
y.toString() // => "[object MyClass2]"
                         // ^-------- Tag is now pointing to the return of `@@toStringTag`
```



##### **`Symbol.for`**

###### Description
Checks for the existence of a specified `Symbol` in the global symbols registry and return that `Symbol` if it's found or creates it then return it if not found.


###### Syntax
```javascript
Symbol.for(string) 
```



###### Examples
```javascript
Symbol.for('x') === Symbol.for('x') // => true -> Symbol(x)
Symbol('x') === Symbol('x') // => false
```



##### **`Symbol.keyFor`**

###### Description
Retrieves the key used to create the global registry symbol if found otherwise `undefined`.


###### Syntax
```javascript
Symbol.keyFor(Symbol)
```


###### Examples
```javascript
const
  sym = Symbol.for('x'),
  locSym = Symbol('y'),
  it = Symbol.iterator;

console.log(Symbol.keyFor(sym));    // => X         - found in the global registry
console.log(Symbol.keyFor(locSym)); // => undefined - local symbol not found on the global registry
console.log(Symbol.keyFor(it));     // => undefined - well-known symbol not found on the global registry
```
