### Iterables & Iterators

#### Description
- **Iterable**: Object with `[Symbol.iterator]` method as own property which when called returns an iterator.
- **Iterator**: Object containing `next` method as own property which when called returns object with two properties:
  - **`value`**: Holds current value of the iterator.
  - **`done`**: Boolean defines iteration process end.



#### Examples
```javascript
/* For Demo Purposes */
const
  iterator = {
    // ...
    next: () => {
      // ...
      return {
        value : /* Any JavaScript value */,
        done  : /* ture | false */
      }
    }
  },

  iterable = {
    // ...
    [Symbol.iterator]: () => {
      // ...
      return iterator
    }
  }
```



#### Iterable Objects
- **`Array`**
- **`TypedArray`**
- **`Map`**
- **`Set`**
- **`NodeList`**
- Objects returned from `entries()`, `keys()`, `values()` methods.



#### Iterable Consumers
- **`for ... of`** loop
- **Spread Operator**
- **Destructuring**

##### Examples
```javascript
const arr = [1, 2, 3];

for (elem of arr) {
  console.log(elem) // 1, 2, 3
}

const add = (a, b, c) => a + b + c;
add(...arr) // 6

const [a, b, c] = arr;
console.log(a) // => 1
console.log(b) // => 2
console.log(c) // => 3
```
