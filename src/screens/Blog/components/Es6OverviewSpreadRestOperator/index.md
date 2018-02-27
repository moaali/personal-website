### Spread / Rest Operator
#### Spread
Expands and expression in positions where a comma separated list are expected like function call arguments, array elements, destructuring

#### Examples
```javascript
let x = [3, 4]
let y = [1, 2, ...x] // [1, 2, 3, 4]

let args = [1, 2, 3]
invoke(...args) === invoke(1, 2, 3)
```

#### Rest
Used to convert function infinte number of arguments into array in function declarations.

#### Example
```javascript
function add(...args) {
  let total = 0;
  args.map((num) => {
    total += num; 
  });
  
  return total;
}

add(1, 2, 3, 4) // 10
```
