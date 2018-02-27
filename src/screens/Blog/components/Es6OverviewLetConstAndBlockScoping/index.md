### let, const and Block Scoping

#### `let`

##### Description

Used to create a global-scoped or block-scoped variable whose refrence **can** be re-assigned but it can't be re-declared in the same scope.



##### Syntax

```javascript
let identifier [= expression]; // Assignment is optional
```




##### Notes

1. `let` creates global-scoped & block-scoped variable contrary to `var` that creates global-scoped & **function-scoped** only.
2. `let` doesn't create properties on global object contrary to `var`.
3. `let` allows only a single declaration for a sepecific identifier within the same scope. redeclaring the same variable created by `let` within the same scope throws an `SuntaxError`.
4. `let` assignment (a.k.a: intialzation) is **optional** meaninig you can do this `let x;`.
5. `let` gets hoisted but it can't be accessed within the **Temporal Dead Zone[1]** (a.k.a: **TDZ**) means you can't reference the identifier before or within the declaration statement or `RefrenceError` is thrown;

- [1] **Temporal Dead Zone** : The period between scope starting position untill the declaration statement position.

```javascript
// [ Item 1 ]
let x = 0; // global-scoped
function fn() {
  let y = 1; // function-scoped also block-scoped
  if ( y === 1 ) {
    let z = 2; // block-scoped
  }
}


// [ Item 2 ]
let x = 0;
window.x; // undefined not 0


// [ Item 3 ]
let x = 0;
let x = 1; // SyntaxError

let y = 1;
if ( true ) {
  let y = 2; // Totally valid
}


// [ Item 5 ]
let x = 0;

let fn = function () {
  return x;
  let x = 1; // Error below asserts that x is hoisted
};

fn() // RefrenceError
```

##### Practical Usage
- Use `let` whereever you need to re-assign the same identifier to a different value, with loops for instance, otherwise use `const`.



#### `const`


##### Description

The same as `let` with some differences. It is used to create a global-scoped or block-scoped variable whose refrence **can't** be re-assigned and it can't be re-declared in the same scope.



##### Syntax

```javascript
const IDENTIFIER = expression; // Assignment is a must
```




##### Notes

1. `const` creates global-scoped & block-scoped variable contrary to `var` that creates global-scoped & **function-scoped** only, same as `let`.
2. `const` doesn't create properties on global object contrary to `var`, same as `let`.
3. `const` allows only a single declaration for a sepecific identifier within the same scope. redeclaring the same variable created by `const` within the same scope throws a `SyntaxError`. re-assigment of the same identifier at any scope throws a `TypeError`.
4. `const` allows you to delete/write/edit the assigned object.
5. `const` assignment (a.k.a: intialzation) is **a must** meaninig you **can't** do this `const x;` contrary to `let`.
6. `const` gets hoisted but it can't be accessed within the **Temporal Dead Zone** (a.k.a: **TDZ**) means you can't reference the identifier before or within the declaration statement or `RefrenceError` is thrown;

- Common practice when using `const`: capitalize all identifier letters and in case multiple words identifier use `_` as separator.

```javascript
// [ Item 1 ]
const X = 0; // global-scoped
function fn() {
  const Y = 1; // function-scoped also block-scoped
  if ( Y === 1 ) {
    const Z = 2; // block-scoped
  }
}


// [ Item 2 ]
const X = 0;
window.X; // undefined not 0


// [ Item 3 ]
const X = 0;
const X = 1; // SyntaxError
X = 1; // TypeError: re-assigment is not allowed

const Y = 1;
if ( true ) {
  Y = 2; // TypeError: re-assigment is not allowed
  const Y = 2; // Totally valid
}


// [ Item 4 ]
const ARR = [1, 2];
ARR.push(3);    // Valid: ARR = [1, 2, 3]
delete ARR[0];  // Valid: ARR = [undefined, 2, 3]
ARR[0] = 'ONE'; // Valid: ARR = ['ONE', 2, 3]


// [ Item 6 ]
const X = 0;

const FN = function () {
  return x;
  const X = 1; // Error below asserts that x is hoisted
};

FN() // RefrenceError
```

##### Practical Usage
- Use `const` whereever you don't need to re-assign the same identifier to a different value, otherwise use `let`.
