webpackJsonp([33],{774:function(r,e){r.exports="### Promises\r\n\r\n##### Description\r\nPromise is the eventual result of async operation.\r\n\r\n\r\n##### Terms\r\n- **Resolver**: Function that defines `Promise` logic.\r\n- **Thenable**: Object with a `then` method, it may be a `Promise` object or user defined object.\r\n- **Pending**: `Promise` status when it doesn't achieve any result yet.\r\n- **Settlement**: `Promise` status when it achieves any result (success/fail).\r\n- **Fulfillment**: `Promise` has succeeded/resolved.\r\n- **Fail/Reject**: `Promise` is rejected/failed.\r\n\r\n<img src='https://i.stack.imgur.com/idOX8.png' alt='promises'>\r\n\r\n\r\n\r\n##### API\r\n\r\n###### `Constructor`\r\n``` javascript\r\n/**\r\n * Promise constructor consists of 3 simple parts as following:\r\n *\r\n * [1] : Async operation.\r\n * [2] : Success condition to resolve returned data from async operation.\r\n * [3] : Fail condition to reject the promise.\r\n */\r\n\r\nconst\r\n  promise = new Promise(( resolve, reject ) => {\r\n    // [1]\r\n    const\r\n      data = '';\r\n\r\n    // [2]\r\n    data && resolve( data );\r\n\r\n    // [3]\r\n    !data && reject( new Error('Error: Promise Rejected!') );\r\n  });\r\n```\r\n\r\n\r\n###### `then`\r\n``` javascript\r\n/**\r\n * @param {function} successHandler  receives `[[PromiseValue]]` property value as its argument if `[[PromiseStatus]]` is resolved.\r\n * @param {function} errorHandler    receives promise passed error as its argument if `[[PromiseStatus]]` is rejected.\r\n * @return Promise Object.\r\n */\r\n\r\npromise.then( successHandler, errorHandler );\r\n```\r\n\r\n\r\n###### `catch\r\n``` javascript\r\n/**\r\n * @param {function} errorHandler  receives promise passed error as its argument if `[[PromiseStatus]]` is rejected.\r\n * @return Promise Object.\r\n */\r\n\r\npromise.catch( errorHandler );\r\n```\r\n\r\n\r\n###### `all`\r\n``` javascript\r\n/**\r\n * @param {array} iterable  array of promises\r\n * @return Promise Object.\r\n */\r\n\r\nPromise.all( iterable )\r\n```\r\n\r\n\r\n###### `race`\r\n``` javascript\r\n/**\r\n * @param {array} iterable  array of promises\r\n * @return Promise Object.\r\n */\r\n\r\nPromise.race( iterable )\r\n```\r\n\r\n\r\n###### `resolve`\r\n``` javascript\r\n/**\r\n * @param {*} arg  value, promise, thenable.\r\n * @return Promise Object.\r\n */\r\n\r\nPromise.resolve( arg )\r\n```\r\n\r\n\r\n###### `reject`\r\n``` javascript\r\n/**\r\n * @param {*} arg  value passed when promise is rejected.\r\n * @return Promise Object.\r\n */\r\n\r\nPromise.reject( arg )\r\n```\r\n\r\n\r\n##### Notes\r\n- Inside `Promise` constructor body any error thrown is treated as the rejection value.\r\n- `then`: method used to register callback to receive fulfillment value and/or the reason why the promise is rejected.\r\n- For chainable `then`, each one `successHandler`'s argument equals to the previous `then` return value.\r\n- When a promise is rejected the first `catch` method fires its callback with the promise error as its argument.\r\n- `catch` method doesn't stop further code execution.\r\n- each `then` method throws its error to the next `catch` method in the chain.\r\n- `Promise.catch( errorHandler )` = `Promise.then( null, errorHandler )`.\r\n- \r\n- Whenever possible try to make promise rejection value as instance of `Error` for debugging purposes.\r\n- `Promise.all`: if only one promise in the collection is rejected then the return promise `[[PromiseStatus]]` will be `rejected`.\r\n- `Promise.race`: the first settled promise is the one who defines the returned promise `[[PromiseStatus]]` & `[[PromiseValue]]`.\r\n"}});