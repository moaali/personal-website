### Proxy

#### Description
Object used to override/customize default behavior of fundamental operations on other objects.


#### Syntax
```javascript
/**
 * Proxy Object.
 * @param  {*}      target  target object to operate on
 * @param  {Object} handler tarps container
 * @return {Proxy}          Proxy Object
 */
const p = new Proxy(target, handler)
```


#### Practical Usage
Here are some of the practical usages of the `Proxy` object. (VIEW REPO OF THE FOLLOWING EXAMPLES HERE).

1. Listening to changes on a specific object.
2. Object members type validation.
3. Achieving true private members.
4. Revoking access to data.
5. Intercepting certain operations on objects.


#### API

1. **`Proxy.revocable()`**
2. **`handler.getPrototypeOf()`**
3. **`handler.setPrototypeOf()`**
4. **`handler.isExtensible()`**
5. **`handler.preventExtensions()`**
6. **`handler.getOwnPropertyDescriptor()`**
7. **`handler.defineProperty()`**
8. **`handler.has()`**
9. **`handler.get()`**
10. **`handler.set()`**
11. **`handler.deleteProperty()`**
12. **`handler.ownKeys()`**
13. **`handler.apply()`**
14. **`handler.construct()`**


##### **`Proxy.revocable()`**

###### Description
Creates a revocable `Proxy` object.


###### Syntax
```javascript
 /**
 * Creates a revocable Proxy object.
 * @param  {*}      target  target object to operate on
 * @param  {Object} handler tarps container
 *
 * @return {Object}
 *    Object with two props `proxy` containing the Proxy Object
 *    and `revoke` method to terminate the proxy.
 */
Proxy.revocable(target, handler);
```



###### Examples
```javascript
let
  revocable = Proxy.revocable({}, {
    get(target, name) {
      return `GET: "${name}" Property`
    }
  });

let p = revocable.proxy;

console.log(p.a); // => GET: "a" Property

// when calling this method every trap throws a TypeError
revocable.revoke();

console.log(p.a); // => TypeError

```




##### **`handler.getPrototypeOf()`**

###### Description
Intercepts/Customizes `[[GetPrototypeOf]]` operations.
.


###### Syntax
```javascript
/**
 * Intercept [[GetPrototypeOf]] Operations.
 *
 * @param  {Object} target => target object to find prototype for.
 *
 * @return {Object|null}
 *
 * @exceptions
 *   + TypeError
 *     01. Returned value isn't `null` || `Object`.
 *     02. Target object isn't extensible.
 */
handler.getPrototypeOf(target);
```



###### Examples
```javascript
let
  obj   = {},
  proto = {},
  getProto;

getProtoProxy = target => {
  const handler = {
    getPrototypeOf(target) {
      console.log('[[GetProtoType]] Trapped')
      return proto;
    }
  }

  return new Proxy(target, handler);
}

let p = getProtoProxy(obj);
console.log(Object.getPrototypeOf(p)) // => [[GetProtoType]] Trapped {}
```



###### Notes
- `handler.getPrototypeOf()` traps any operation that depends on `[[GetProtoType]]` internal method which will be one of the following:
  1. `Object.getPrototypeOf()`
  2. `Reflect.getPrototypeOf()`
  3. `Object.prototype.isPrototypeOf`
  4. `instanceof`
  5. `__proto__`





##### **`handler.setPrototypeOf()`**

###### Description
Intercepts/Customizes `Object.setPrototypeOf()` operations.


###### Syntax
```javascript
/**
 * Intercept setting `[[Prototype]]` internal property Operations.
 *
 * @param  {Object} target    => target object to set prototype for.
 * @param  {Object} prototype => object to set as prototype for target.
 *
 * @return {Boolean}
 *    true if the prototype is set, false otherwise.
 *
 * @exceptions
 *   + TypeError
 *     01. Target object isn't extensible. So the prototype object should be
 *         the same as `Object.getPrototypeOf()`
 */
handler.setPrototypeOf(target, prototype);
```



###### Examples
```javascript
let
  obj   = {},
  proto = {},
  setProtoProxy;

setProtoProxy = (target, proto) => {
  const handler = {
    setPrototypeOf(target, proto) {
      return true
    }
  };

  return new Proxy(target, proto);
};

const p = setProtoProxy(obj, proto);
console.log(Object.setPrototypeOf(p, null)) // => { a: 1 }
```


###### Notes
- `handler.setPrototypeOf()` traps any operation that depends on setting `[[ProtoType]]` internal property which will be one of the following:
  1. `Object.setPrototypeOf()`
  2. `Reflect.setPrototypeOf()`


##### **`handler.isExtensible()`**

###### Description
Intercepts/Customizes `Object.isExtensible()` operations.


###### Syntax
```javascript
/**
 * Intercept `Object.isExtensible()` Operations.
 *
 * @param  {Object} target => target object to check its extensibility.
 *
 * @return {Boolean}
 *    true if the object is extensible, false otherwise.
 *
 * @exceptions
 *   + TypeError
 *     01. `Object.isExtensible(proxy)` !== `Object.isExtensible(obj)`
 */
handler.isExtensible(target);
```



###### Examples
```javascript
let
  obj      = {},
  nonExObj = {},
  extendProxy;

Object.preventExtensions(nonExObj);

extendProxy = target => {
  const handler = {
    isExtensible(target) {
      console.log('isExtensible is accessed!!');
      return Reflect.isExtensible(target);
    }
  }

  return new Proxy(target, handler)
}

let
  p1 = extendProxy(obj),
  p2 = extendProxy(nonExObj);

console.log(Object.isExtensible(p1)); // => isExtensible is accessed!, true
console.log(Object.isExtensible(p2)); // => isExtensible is accessed!, false
```



##### **`handler.preventExtensions()`**

###### Description
Intercepts/Customizes `Object.preventExtensions()` operation.


###### Syntax
```javascript
/**
 * Intercept `Object.preventExtensions()` Operation.
 *
 * @param  {Object} target => target object to prevent extensibility for.
 *
 * @return {Boolean}
 *    true if the object is extensible, false otherwise.
 *
 * @exceptions
 *   + TypeError
 *     01. `Object.preventExtensions(proxy)` === Object.isExtensible(proxy)
 */
handler.preventExtensions(target);
```



###### Examples

```javascript
let
  obj      = {},
  extendProxy;

extendProxy = target => {
  const handler = {
    preventExtensions(target) {
      console.log('preventExtensions is accessed!!');
      return Reflect.preventExtensions(target)
    }
  }

  return new Proxy(target, handler)
}

let p = extendProxy(obj);

console.log(Object.preventExtensions(p)); // => isExtensible is accessed!, true
```




##### **`handler.getOwnPropertyDescriptor()`**

###### Description
Intercepts/Customizes `Object.getOwnPropertyDescriptor()` operation.


###### Syntax
```javascript
/**
 * Intercept `Object.getOwnPropertyDescriptor()` Operation.
 *
 * @param  {Object} target   => target object to look for property in.
 * @param  {String} property => property to get descriptor for.
 *
 * @return {Object|undefined}
 *    descriptor object for the property or undefined if it doesn't exist.
 *
 * @exceptions
 *   + TypeError
 *     01. Return isn't `Object` or `undefined`.
 *     02. Return undefined for existed property in non-extensible target
 *     03. Return undefined for non-configurable property in target
 */
handler.getOwnPropertyDescriptor(target, property);
```



###### Examples
```javascript
let
  obj  = {a: 1},
  obj2 = {c: 2},
  describeProxy;

Object.preventExtensions(obj2);
Object.defineProperty(obj, 'b', {configurable: false});

describeProxy = (target, prop) => {
  const handler = {
    getOwnPropertyDescriptor(target, prop) {
      console.log('getOwnPropertyDescriptor is accessed!!');
      return undefined;
    }
  }

  return new Proxy(target, handler)
}

let
  p1 = describeProxy(obj, 'a'),
  p2 = describeProxy(obj, 'b'),
  p3 = describeProxy(obj2, 'c');

console.log(Object.getOwnPropertyDescriptor(p1, 'a')) // => Descriptor Object
console.log(Object.getOwnPropertyDescriptor(p2, 'b')) // => TypeError: non-configurable property
console.log(Object.getOwnPropertyDescriptor(p3, 'c')) // => TypeError: non-extensible object
```




##### **`handler.defineProperty()`**

###### Description
Intercepts/Customizes `Object.defineProperty()` operation.


###### Syntax
```javascript
/**
 * Intercept `Object.defineProperty()` Operation.
 *
 * @param  {Object} target     => target object to look for property in.
 * @param  {String} property   => property to define on target object.
 * @param  {Object} descriptor => descriptor object for the specified property.
 *
 * @return {Boolean}
 *    true if the property is set, false otherwise.
 *
 * @exceptions
 *   + TypeError
 *     01. Return false in `strict mode`.
 *     02. Setting configurable existed property to be non-configurable.
 *     03. Adding/modifying non-configurable property that doesn't exist as
 *         non-configurable.
 */
handler.defineProperty(target, property, descriptor);
```



###### Examples
```javascript
let
  obj  = {a: 1},
  defineProxy;

Object.defineProperty(obj, 'b', {configurable: false});

defineProxy = (target) => {
  const handler = {
    defineProperty(target, prop, descriptor) {
      console.log('defineProperty is accessed!!');
      return true;
    }
  }

  return new Proxy(target, handler)
}

let p = defineProxy(obj);

console.log(Object.defineProperty(p, 'a', {configurable: false})) // => TypeError
console.log(Object.defineProperty(p, 'd', {configurable: false})) // => TypeError
console.log(Object.defineProperty(p, 'b', {writable: false})) // => Object
```




##### **`handler.has()`**

###### Description
Intercepts/Customizes `in` operator lookups.


###### Syntax
```javascript
/**
 * Intercepts/Customizes `in` operator lookups.
 *
 * @param  {Object} target     => target object to look for property in.
 * @param  {String} property   => property to look for in target object.
 *
 * @return {Boolean}
 *    true if the property exists, false otherwise.
 *
 * @exceptions
 *   + TypeError
 *     01. Return false if the property exists.
 */
handler.has(target, property);
```



###### Examples
```javascript
let
  obj  = {a: 1},
  hasProxy;

Object.defineProperty(obj, 'b', {configurable: false});

hasProxy = (target) => {
  const handler = {
    has(target, prop) {
      console.log('has is accessed!!');
      return true;
    }
  }

  return new Proxy(target, handler)
}

let p = hasProxy(obj);

console.log('a' in p) // => has is accessed!!, true
```




##### **`handler.get()`**

###### Description
Intercepts/Customizes a property value.


###### Syntax
```javascript
/**
 * Intercepts/Customizes a property value.
 *
 * @param  {Object} target   => target object to look for property in.
 * @param  {String} property => property to look for in target object.
 * @param  {Object} receiver => proxy object.
 *
 * @return {*}
 *    Any value.
 *
 * @exceptions
 *   + TypeError
 *     01. Return different value for non-writable,
 *         non-configurable properties.
 *     02. Not returning `undefined` if the lookup property has value
 *         of `undefined` and non-configurable.
 */
handler.get(target, property, receiver);
```



###### Examples
```javascript
let
  obj  = {a: 1},
  getProxy;

Object.defineProperty(obj, 'b', {configurable: false, writable:false, value: 2});
Object.defineProperty(obj, 'c', {configurable: false});

getProxy = (target) => {
  const handler = {
    get(target, prop, proxy) {
      console.log('get is accessed!!');
      return 1;
    }
  }

  return new Proxy(target, handler)
}

let p = getProxy(obj);

console.log(p.a) // => get is accessed!!, 1
console.log(p.b) // => TypeError
console.log(p.c) // => TypeError
```





##### **`handler.set()`**

###### Description
Intercepts/Customizes setting a property.


###### Syntax
```javascript
/**
 * Intercepts/Customizes setting a property.
 *
 * @param  {Object} target   => target object to look set property on.
 * @param  {String} property => property name.
 * @param  {*}      value    => any value.
 * @param  {Object} receiver => proxy object.
 *
 * @return {Boolean}
 *    True if the assignment process is completed
 *    successfully, false otherwise.
 *
 * @exceptions
 *   + TypeError
 *     01. Setting non-writable, non-configurable properties.
 *     02. Setting non-configurable property that has value of `undefined`.
 *     03. Return false from `set` in `strict mode`.
 */
handler.set(target, property, value, receiver);
```



###### Examples
```javascript
let
  obj  = {a: 1},
  setProxy;

Object.defineProperty(obj, 'b', {configurable: false});
Object.defineProperty(obj, 'c', {configurable: false, writable: false, value: 2});

setProxy = (target) => {
  const handler = {
    set(target, prop, value, proxy) {
      console.log('set is accessed!!');
      return true;
    }
  }

  return new Proxy(target, handler)
}

let p = setProxy(obj);

p.a = 1; // => set is accessed!!, 1
p.b = 1; // => TypeError
```



##### **`handler.deleteProperty()`**

###### Description
Intercepts/Customizes `delete` operator.


###### Syntax
```javascript
/**
 * Intercepts/Customizes `delete` operator.
 *
 * @param  {Object} target   => target object to look set property on.
 * @param  {String} property => property name.
 *
 * @return {Boolean}
 *    True if the delete process is completed
 *    successfully, false otherwise.
 *
 * @exceptions
 *   + TypeError
 *     01. Deleting non-configurable own properties.
 */
handler.deleteProperty(target, property);
```



###### Examples
```javascript
let
  obj  = {a: 1},
  delProxy;

Object.defineProperty(obj, 'b', {configurable: false});

delProxy = (target) => {
  const handler = {
    deleteProperty(target, property) {
      if (property in target) {
        console.log(`Property ${property} successfully deleted!!!`);
        return true
      } else {
        console.log(`Property ${property} not found on ${target} object`);
        return false
      }
    }
  }

  return new Proxy(target, handler)
}

let p = delProxy(obj);

delete p.a; // => Property a successfully deleted!!!, true
delete p.b; // => TypeError
```




##### **`handler.ownKeys()`**

###### Description
Intercepts/Customizes `Reflect.ownKeys` operation.


###### Syntax
```javascript
/**
 * Intercepts/Customizes `Reflect.ownKeys` operation.
 *
 * @param  {Object} target => target object to look for its own keys.
 *
 * @return {Boolean}
 *    Array of own enumerable keys.
 *
 * @exceptions
 *   + TypeError
 *     01. Return isn't an array.
 *     02. Returned array containing values types other than
 *         `String` & `Symbol`.
 *     03. Returned array containing non-configurable own properties.
 *     04. Returned array containing non-existence keys of
 *         non-extensible object.
 */
handler.ownKeys(target);
```



###### Examples
```javascript
let
  obj  = {a: 1},
  ownProxy;

Object.defineProperty(obj, 'b', {configurable: false});

ownProxy = (target) => {
  const handler = {
    ownKeys(target) {
      console.log(`ownKeys is accessed!!`);
      return ['a', 'b', 'c']
    }
  }

  return new Proxy(target, handler)
}

let p = ownProxy(obj);

console.log(Object.getOwnPropertyNames(obj)); // => ownKeys is accessed!!, ['a', 'b', 'c']
```



###### Notes
- `handler.ownKeys` intercepts the following operations:
  1. `Object.keys()`
  2. `Object.getOwnPopertyNames()`
  3. `Object.getOwnPropertySymbols()`
  4. `Reflect.ownKeys()`




##### **`handler.apply()`**

###### Description
Intercepts/Customizes function calls.


###### Syntax
```javascript
/**
 * Intercepts/Customizes function calls.
 *
 * @param  {Object} target => target function to intercept its invocation.
 *
 * @return {*}
 *    Any value.
 */
handler.apply(target);
```



###### Examples
```javascript
let
  fn  = function () { console.log("I'm not gonna show!!") },
  applyProxy;

applyProxy = (target) => {
  const handler = {
    apply(target, thisArg, argsList) {
      console.log(`Function is called`);
    }
  }

  return new Proxy(target, handler)
}

let p = applyProxy(fn);

console.log(p()); // => Function is called
```





##### **`handler.construct()`**

###### Description
Intercepts/Customizes `new` operator.


###### Syntax
```javascript
/**
 Intercepts/Customizes `new` operator.
 *
 * @param  {Function} target   => constructor function/class.
 * @param  {Array}    argsList => array of the passed arguments to constructor.
 * @param  {Object}   proxy    => called proxy constructor.
 *
 * @return {Object}
 *
 * @exceptions
 *   + TypeError
 *     01. Return isn't Object.
 *     02. Target isn't a valid constructor.
 */
handler.construct(target, argsList, proxy);
```



###### Examples
```javascript
let
  C  = function () {},
  constructProxy;

constructProxy = (target) => {
  const handler = {
    construct(target, argsList, proxy) {
      console.log(`Construct is accessed`);
      return {}
    }
  }

  return new Proxy(target, handler)
}

let p = constructProxy(C);

console.log(new p()); // => Construct is accessed, Object {}
```
