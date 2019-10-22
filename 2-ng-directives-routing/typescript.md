# Typescript

Typescript recibe y leer código javascript sin problemas, la extención de los archivos que se utiliza es ".ts".

En typescript se busca tener más control del tipo de variables  llevar una programación orientada a objetos.

Tipos de variables:

* boolean
* number
* string
* array
* enum
* void
* null & undefined
* object
* any

## Var & Let

"Var" se utiliza para declarar variables pero estas pueden ser accedidas fuera del alcance del bloque.

"Let" se utiliza igual que "var" para declarar variables pero estas solo se podrán acceder dentro del bloque.

## Delete

Se utiliza para eliminar una propiedad o variable del bloque.

## Interfaces

Se utiliza para definir la "forma" que tendrá un tipo de variable.

## Clases

Define una clase muy parecido a los lenguajes comunes orientados a objetos.

Javascript

```js
function myFunc(myInt) {
  return myInt + 5;
}
```

Typescript

```ts
function myFunc(myInt: int): int {
  return myInt + 5;
}
```

Javascript

```js
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
console.log(greeter(user));
```

Typescript

```ts
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'Jane', lastName: 'User' };

console.log(greeter(user));
```

Javascript

```js
class Student {
    constructor(firstName, middleInitial, lastName) {
      this.firstName = firstName;
      this.middleInitial = middleInitial;
      this.lastName = lastName;
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

var student = new Student('Pedro', 'J', 'Bladimir');
console.log(student.firstName);
console.log(student.lastName);
console.log(student.fullName);
```

Typescript

```ts
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

let student = new Student('Pedro', 'J', 'Bladimir');
console.log(student.firstName);
console.log(student.lastName);
console.log(student.fullName);
```

[Referencia](https://www.typescriptlang.org)  
[Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

[<--](./README.md)
