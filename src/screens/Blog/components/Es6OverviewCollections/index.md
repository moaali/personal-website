### Collections
#### Map
##### Description
Map Objects = Objects + super powers :).

##### Syntax
```javascript
new Map([iterable])
```
##### Examples
```javascript
/**
 * [1] : Creating a map object using constructor args.
 * [2] : Creating a map object using `set` method.
 */

// [1]
const
  map1 = new Map([['first', 1], [{key: 'object as a key'}, 'object']]);

// [2]
const
  map2 = new Map();

map2.set('first', 1);
map2.set({key: 'object as a key'}, 'object');
```
##### API
###### API List
- **`Map.prototype.size`**: Determines number of map object members.
- **`Map.prototype.set(key, value)`**: Registers a new member in a map object.
- **`Map.prototype.get(key)`**: Retrieves a value of a map object member.
- **`Map.prototype.delete(key)`**: Deletes a map object member.
- **`Map.prototype.clear()`**: Empty map object.
- **`Map.prototype.has(key)`**: Checks for member existence in a map object.
- **`Map.prototype.entries()`**: Provides iterable object contaning all members key/value pairs in array format.
- **`Map.prototype.keys()`**: Provides iterable object contaning all members keys in array format.
- **`Map.prototype.values()`**: Provides iterable object contaning all members values in array format.
- **`Map.prototype.forEach(callbackFn[, thisArg])`**: Loops throught each map object member and apply a callback function on it.

###### API Examples
```javascript
var
  map = new Map([['first', 1], [{key: 'object as a key'}, 'object'], [3, [1, 2]]]);

map.size                            // => 3
map.get('first')                        // => 1
map.has('first')                        // => true
map.entries()                       // => [[Entries]] = [['first', 1], [{key: 'object as a key'}, 'object'], [3, [1, 2]]]
map.keys()                          // => [[Entries]] = ['first', {key: 'object as a key'}, 3]
map.values()                        // => [[Entries]] = [1, 'object', [1, 2]]
map.delete('first')                     // => returns `true` and map [[Entries]] = [[{key: 'object as a key'}, 'object'], [3, [1, 2]]]
map.clear()                         // => map now has no [[Entries]]

const
  myMap = new Map();

myMap.set('first', 1);
myMap.set({key: 'object as a key'}, 'object');

myMap.forEach((val, key, obj) => {
  console.log(`I'm ${obj} object, I have '${val}' as the value of ${key}`)
})
// I'm [object Map] object, I have '1' as the value of first
// I'm [object Map] object, I have 'object' as the value of [object Object]
```
##### Notes
Some of the powers of Map objects:
- Map objects are iterable, it can be used with `for ... of` loop.
- Map objects has dynamic `size` property to determine number of object members.
- Map objects keys can be any type *primitive or compound*.
- Map objects has direct check for member existence via `has` method.

#### WeakMap
WeakMap objects are the same as Map objects with the following exceptions:
1. WeakMap object **keys must be objects**.
2. WeakMap object members are *weakly refrenced* meaning if they haven't non refrences they will be garbage collected.

#### Set
##### Description
Indexed data structure with unique values, same as arrays but without duplicates.

##### Syntax
```javascript
new Set([iterable])
```

##### Examples
```javascript
const
  set = new Set([1, 2, 3, 3, 3]);

set // => [[Entries]] : [1, 2, 3]
```

##### API
`Set` has the same API as `Map` Object above except that `set` method is replaced with `add` method to add members to the object, also it doesn't have a `get` method.

###### API Examples
```javascript
const
  set = new Set([1, 2]);

set.add(3) // => [[Entries]] : [1, 2, 3]

// You can't directly access set content.
const
  arr = [...set]

arr[0]
```

##### Notes
- Think of Set behavior as arrays but without the duplications.
- You can't directly access `set` content see above example for accesing `set` members.


#### WeakSet
WeakSet objects are the same as Set objects with the following exceptions:
1. WeakSet object **values must be objects**.
2. WeakSet object members are *weakly refrenced* meaning if they haven't non refrences they will be garbage collected.
