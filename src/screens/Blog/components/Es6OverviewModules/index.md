### Modules

#### `export`
##### Syntax
``` javascript
export default expression
export { name1, name2 as alias, name3 as default, ... }
export let multiple, names
```

##### Notes
- Only one default value can be exported from the same script.
- The name of the default export can be omitted (i.e. you can export anonymous function).


##### `import`
##### Syntax
``` javascript
import defaultName from './module'
import * as namespace from './module'
import { name1, name2 as alias, ... } from './module'
import defaultName, * as namespace from './module'
import defaultName, { name1, name2 as alias, ... } from './module'
import  './module'
```

##### Notes
- Importing something that wasn't exported will fail.
- If your module code will run once you can ignore all naming rules and just `import './filename'`.
