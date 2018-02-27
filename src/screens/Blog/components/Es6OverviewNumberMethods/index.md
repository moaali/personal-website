### Number Methods

#### Methods List
- Number.isNaN
- Number.isInteger
- Number.isFinite
- Number.parseInt
- Number.parseFloat
- Number.MAX_SAFE_INTEGER
- Number.MIN_SAFE_INTEGER
- Number.isSafeInteger
- Number.EPSILON


#### `Number.isNaN`

##### Description
Checks if a value is **NaN**.


##### Syntax
```javascript
Number.isNaN(value)
```


##### Examples
```javascript
Number.isNaN(0/0) // => true
Number.isNaN(NaN) // => true

Number.isNaN(true)  // => false
Number.isNaN('NaN') // => false
```


#### `Number.isInteger`

##### Description
Checks if a value is **integer**.


##### Syntax
```javascript
Number.isInteger(value)
```


##### Examples
```javascript
Number.isInteger(1)   // => true
Number.isInteger('1') // => true

Number.isInteger(1.1) // => false
```


#### `Number.isFinite`

##### Description
Checks if a value is finite number.


##### Syntax
```javascript
Number.isFinite(value)
```


##### Examples
```javascript
Number.isFinite(1)          // => true
Number.isFinite(2e64)       // => true

Number.isFinite(Infinity)   // => false
Number.isFinite(NaN)        // => false
Number.isFinite(1/0)        // => false
```


#### `Number.parseInt`

##### Description
parses a value as **integer**.


##### Syntax
```javascript
Number.parseInt(value)
```


##### Examples
```javascript
Number.parseInt(1.2)       // => 1
Number.parseInt('1.99')    // => 1
Number.parseInt(NaN)       // => NaN
Number.parseInt(Infinity)  // => NaN
```


#### `Number.parseFloat`

##### Description
parses a value as **floating point number**.


##### Syntax
```javascript
Number.parseFloat(value)
```


##### Examples
```javascript
Number.parseFloat(1.1)      // => 1.1
Number.parseFloat('1.99')   // => 1.99
Number.parseFloat(NaN)      // => NaN
Number.parseFloat(Infinity) // => Infinity
```



#### `Number.MIN_SAFE_INTEGER`

##### Description
Returns the minimum safest interger.


##### Syntax
```javascript
Number.MIN_SAFE_INTEGER // => -(2 ** 53 - 1)
```



#### `Number.MAX_SAFE_INTEGER`

##### Description
Returns the maximum safest interger.


##### Syntax
```javascript
Number.MAX_SAFE_INTEGER // => 2 ** 53 - 1
```


#### `Number.isSafeInteger`

##### Description
Checks if a number is a safe integer meaning it falls between and including -(2 ** 53 - 1) & (2 ** 53 - 1).


##### Syntax
```javascript
Number.isSafeInteger(value)
```



#### `Number.EPSILON`

##### Description
Returns the smallest possible positive number.


##### Syntax
```javascript
Number.EPSILON // => 2 ** -52
```
