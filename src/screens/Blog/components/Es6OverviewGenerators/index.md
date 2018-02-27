
### Generators

#### Description
Functions able to pause/resume its body execution. It returns iterable generator object that can be used to step through execution process. pause/resume points are defined by `yield` expression.


#### Syntax
```javascript
function* generator() {
  statements;
}
```



#### Examples
```javascript
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const x = gen();

x.next().value // => 1
x.next().value // => 2
x.next().value // => 3
x.next().value // => undefined
```
