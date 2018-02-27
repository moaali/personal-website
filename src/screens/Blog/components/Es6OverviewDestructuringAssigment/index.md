### Destructuring Assigment

#### Description
JavaScript expression that used to assign values from arrays, objects, maps, sets to distinct variables.


#### Examples
```javascript
/**
 * [1] : Using rest parameter to make a sub-array from the main array.
 * [2] : Using Object literal enhancement to set values to keys as seprate variables.
 * [3] : Setting default values to variables.
 * [4] : Swapping values.
 * [5] : Ignoring some values in destructuring array.
 * [6] : Different variable names for properties values.
 * [7] : Computed values with destructuring.
 */

let
  g   = 16,
  h   = 17,
  key = 'm';

let
  [a, b, ...rest]  = [1, 2, 3, 4],   // [1] a = 1, b = 2, rest = [3, 4]
  {c, d}           = {c: 6, d: 7},   // [2] c = 6, d = 7
  {e = 1, f = 2}   = {e: 8, f: 9},   // [3] e = 8, f = 9
  [g, h]           = [h, g],         // [4] g = 17, h = 16
  [i, ,j]          = [10, 11, 12],   // [5] i = 10, j = 12
  {k: foo, l: bar} = {k: 13, l: 14}, // [6] foo = 13, bar = 14
  {[key]: n}       = {m: 15}         // [7] n = 15

```
