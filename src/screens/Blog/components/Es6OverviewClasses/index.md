### Classes

#### Description
Syntactic sugar for prototypal inheritance in JavaScript.


#### `class`
Reserved keyword used to define a constructor class.

##### Example

``` javascript
class ClassName {
  // ...
}
```

##### Notes
- `class` name binding inside its scope is `const` binding and `let` binding outside.
- `class` can't be called directly as functions do (i.e. `ClassName()` throws).

#### `constructor()`
Method used once inside a class to define properties and methods on it.

##### Example

``` javascript
class ClassName {
  constructor() {
    this.name = 'ClassName';
  }
}
```

##### Notes
- `constructor` method can't be used with `static` keyword.
- `constructor` method can only be used **once** inside class.
- Methods defined outside `constructor` is set on the class prototype.


#### `extends`
Reserved keyword used when deriving subclasses from a superclass.

##### Example

``` javascript
class Parent {
  // ...
}

class Child extends Parent {
  // ...
}
```

##### Notes
- Methods defined on the super class are accessible by its subclasses.

#### `super`
Reserved keyword used inside subclasses or object literals as a reference for their superclass, or their prototypes in case of object literals.

##### Example

``` javascript
class Parent {
  constructor(kind) {
    this.kind = kind
  }
}

class Child extends Parent {
  constructor(childName, parentKind) {
    super(parentKind);
    this.name = childName;
  }

  sayName() {
    console.log( 'My Name is ' + this.name + ' and I\'m ' + this.kind );
  }
}

let baby = new Child('John', 'Human');
baby.sayName(); // My Name is John and I'm Human
```

``` javascript
const
  Parent = {
    kind: 'Human'
  },

  Child = {
    name: 'John',
    sayName() {
      console.log( 'My Name is ' + this.name + ' and I\'m ' + super.kind )
    }
  };

Object.setPrototypeOf(Child, Parent);
Child.sayName(); // My Name is John and I'm Human
```

##### Notes
- You can't access superclass properties/methods before invoking `super()` method first inside subclass constructor.


#### `static`
Reserved keyword used to define (static methods) methods accessible only by classes themselves not their instances.

##### Example

``` javascript
class Parent {
  static sayName(name) {
    console.log(name);
  }
}

Parent.sayName('Doe'); // Doe

const parentName = new Parent();
parentName.sayName('Doe'); // TypeError
```

##### Notes
- Static methods are reserved for their respective class and can't be accessed inside its instances.
