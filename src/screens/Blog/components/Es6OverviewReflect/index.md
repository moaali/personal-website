### Reflect

#### Description
Built-in object that provide methods for interceptable JavaScript operations.
- It's not a function object.
- Not constructible, it does not have a `[[Construct]]` internal method. (Can't use `new Reflect()` ).
- Not invokable, it does not have a `[[Call]]` internal method. (Can't be invoke it as a function `Reflect()`).


#### API
1. **`Reflect.apply()`**
2. **`Reflect.construct()`**
3. **`Reflect.defineProperty()`**
4. **`Reflect.deleteProperty()`**
5. **`Reflect.get()`**
6. **`Reflect.getOwnPropertyDescriptor()`**
7. **`Reflect.getPrototypeOf()`**
8. **`Reflect.has()`**
9. **`Reflect.isExtensible()`**
10. **`Reflect.ownKeys()`**
11. **`Reflect.preventExtensions()`**
12. **`Reflect.set()`**
13. **`Reflect.setPrototypeOf()`**

Here are the API methods equivalent to understand how it works.
###### Syntax
```javascript
Reflect.apply(fn, thisArg, argsArray) <=> Function.prototype.apply.call(Math.floor, undefined, [1.75]);

Reflect.construct(Target, argsList, newTarget) <=> new Target(...argsList);

// Diff: `Reflect` case return Boolean
Reflect.defineProperty(target, property, descriptor) <=> Reflect.defineProperty(target, property, descriptor)

// Diff: `Reflect` case return Boolean
Reflect.deleteProperty(target, property) <=> delete target.property

// Object property accessors in the form of a function.
Reflect.get(target, property, receiver) <=>

// Diff: `Reflect` case return Boolean
Reflect.set(target, property, value, receiver) <=> // Object property accessors in the form of a function.

// Diff: if non-object is set as the target in case of using `Reflect` it will throw a type error.
Reflect.getOwnPropertyDescriptor(target, property) <=> Reflect.getOwnPropertyDescriptor(target, property)

Reflect.getPrototypeOf(target) <=> Object.getPrototypeOf(target)

// same as in operator but it works like a function
Reflect.has(target, property) <=> property in target

// same but target must be an object in `Reflect` or error is thrown
Reflect.isExtensible(target) <=> Object.isExtensible(target)

Reflect.ownKeys(target) <=> Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))

// Return Boolean and target must be object otherwise error is thrown
Reflect.preventExtensions(target) <=> Object.preventExtensions(target)


Reflect.setPrototypeOf(target, prototype) <=> Object.setPrototypeOf(target, prototype)
```
