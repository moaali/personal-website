### Promises

##### Description
Promise is the eventual result of async operation.


##### Terms
- **Resolver**: Function that defines `Promise` logic.
- **Thenable**: Object with a `then` method, it may be a `Promise` object or user defined object.
- **Pending**: `Promise` status when it doesn't achieve any result yet.
- **Settlement**: `Promise` status when it achieves any result (success/fail).
- **Fulfillment**: `Promise` has succeeded/resolved.
- **Fail/Reject**: `Promise` is rejected/failed.

<img src='https://i.stack.imgur.com/idOX8.png' alt='promises'>



##### API

###### `Constructor`
``` javascript
/**
 * Promise constructor consists of 3 simple parts as following:
 *
 * [1] : Async operation.
 * [2] : Success condition to resolve returned data from async operation.
 * [3] : Fail condition to reject the promise.
 */

const
  promise = new Promise(( resolve, reject ) => {
    // [1]
    const
      data = '';

    // [2]
    data && resolve( data );

    // [3]
    !data && reject( new Error('Error: Promise Rejected!') );
  });
```


###### `then`
``` javascript
/**
 * @param {function} successHandler  receives `[[PromiseValue]]` property value as its argument if `[[PromiseStatus]]` is resolved.
 * @param {function} errorHandler    receives promise passed error as its argument if `[[PromiseStatus]]` is rejected.
 * @return Promise Object.
 */

promise.then( successHandler, errorHandler );
```


###### `catch
``` javascript
/**
 * @param {function} errorHandler  receives promise passed error as its argument if `[[PromiseStatus]]` is rejected.
 * @return Promise Object.
 */

promise.catch( errorHandler );
```


###### `all`
``` javascript
/**
 * @param {array} iterable  array of promises
 * @return Promise Object.
 */

Promise.all( iterable )
```


###### `race`
``` javascript
/**
 * @param {array} iterable  array of promises
 * @return Promise Object.
 */

Promise.race( iterable )
```


###### `resolve`
``` javascript
/**
 * @param {*} arg  value, promise, thenable.
 * @return Promise Object.
 */

Promise.resolve( arg )
```


###### `reject`
``` javascript
/**
 * @param {*} arg  value passed when promise is rejected.
 * @return Promise Object.
 */

Promise.reject( arg )
```


##### Notes
- Inside `Promise` constructor body any error thrown is treated as the rejection value.
- `then`: method used to register callback to receive fulfillment value and/or the reason why the promise is rejected.
- For chainable `then`, each one `successHandler`'s argument equals to the previous `then` return value.
- When a promise is rejected the first `catch` method fires its callback with the promise error as its argument.
- `catch` method doesn't stop further code execution.
- each `then` method throws its error to the next `catch` method in the chain.
- `Promise.catch( errorHandler )` = `Promise.then( null, errorHandler )`.
- 
- Whenever possible try to make promise rejection value as instance of `Error` for debugging purposes.
- `Promise.all`: if only one promise in the collection is rejected then the return promise `[[PromiseStatus]]` will be `rejected`.
- `Promise.race`: the first settled promise is the one who defines the returned promise `[[PromiseStatus]]` & `[[PromiseValue]]`.
