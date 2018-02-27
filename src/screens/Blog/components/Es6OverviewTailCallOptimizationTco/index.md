### Tail Call Optimization (TCO)

**TCO** makes it possible to implement recursive function calls without being worried about call stack overflow.
  1. TCO is a JavaScript engine implementation feature, it cannot be implemented via a transpiler if the browser does not support it.
  2. Works only in `strict mode`

```javascript
function a() {
  return b() // tail call
}

function b() {
  return 'Hello World'
}

a() // => Hello World
```
