### Getter

#### Description
Method that's invoked when a property is looked up in certain object.

- Can't have any parameters.
- Can be deleted via delete operator on the related property.

#### Syntax
```javascript
{get propName() {}}
{get [computedProp]() {}}
```

#### Examples
```javascript
const obj = {
  a: 1,
  get b() {
    console('b property is looked up!!')
    return 2
  }
}

obj.b // => b property is looked up!!, 2
```
