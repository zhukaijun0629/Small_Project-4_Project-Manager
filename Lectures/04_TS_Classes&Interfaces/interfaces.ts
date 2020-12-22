// interface only exists in dev stage, won't be compiled to js
// interface is used to define the structure of an object, could be used as a type to typecheck the oject
// interface can be implemented in class as a contract that the class can adhere to
interface Named {
  readonly name?: string;
  // optional property or method by adding "?"
  outputName?: string;
}

// interface can inherit more than one other interfaces
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    this.name = n;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log('Hi')
    }
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hi there - I am");
console.log(user1);

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
