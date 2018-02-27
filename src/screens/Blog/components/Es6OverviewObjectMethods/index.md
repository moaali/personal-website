### Object Methods

#### Methods List

- Object.prototype.__proto__
- Object.is()
- Object.setPrototypeOf()
- Object.assign()
- Object.getOwnPropertySymbols()

#### `Object.prototype.__proto__`
##### Description
Object property that refrence its constructor prototype obejct.

##### Syntax
```javascript
instance.__proto__
```


##### Examples
```javascript
let
  x = function () {},
  y = {};

x.__proto__ === x.constructor.prototype === Function.prototype
y.__proto__ === y.constructor.prototype === Object.prototype
```


#### `Object.is()`
##### Description
Checks equality of its arguments without applying implicit coersion

##### Syntax
```javascript
Object.is(param1, param2)
```


##### Examples
```javascript
Object.is(NaN, NaN) // => true
Object.is(NaN, 0/0) // => true
Object.is(0, -0)    // => false
Object.is({}, {})   // => false
```


#### `Object.setPrototypeOf()`
##### Description
Define an object as a prototype of other object.

##### Syntax
```javascript
Object.setPrototypeOf(obj, prototype);
```


##### Examples
```javascript
const Human = {
  kind: 'human'
};

const Man = {
  gender: 'Man'
}

const me = {
  name: 'Mo'
}

Object.setPrototypeOf(Man, Human);
Object.setPrototypeOf(me, Man);

me // => { kind: 'human', [[gender: 'Man', name: 'Mo']] }

```


#### `Object.assign()`
##### Description
Shallow copies own enumerable properties from one/multiple source object(s) to a traget object.

##### Syntax
```javascript
Object.assign(target, srcObj1, ...)
```


##### Examples
```javascript
const
  x = { a: 1 },
  y = { b: 2 },
  z = Object.assign({}, x, y);

z // => { a: 1, b: 2 }
```


#### `Object.getOwnPropertySymbols()`
##### Description
Returns an array of all symbol properties of an object

##### Syntax
```javascript
Object.getOwnPropertySymbols(obj) // => [Symbol(x), ...]
```


##### Examples
```javascript
const
  obj = {
    [Symbol('a')]: 1,
    [Symbol('b')]: 2
  };

Object.getOwnPropertySymbols(obj) // => [Symbol(a), Symbol(b)]
```
