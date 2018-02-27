### Setter

#### Description
Method that's invoked when a property is added to certain object.

- Must have only one parameter.
- Can be deleted via delete operator on the related property.

#### Syntax
```javascript
/**
 * Method that's invoked when a property is added to certain object.
 *
 * @param  {*} val Reference to the value setted by user
 * @return {void}
 */
{set propName(val) {}}
{set [computedProp](val) {}}
```

#### Examples
```javascript
const obj = {
  a: 1,
  set b(val) {
    console('b property is assigned a value')
  }
}

obj.b = 2 // => b property is assigned a value
```
