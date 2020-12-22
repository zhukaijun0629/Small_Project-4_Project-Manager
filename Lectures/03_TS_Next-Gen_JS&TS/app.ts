// const userName = "Kevin";

// let age = 30;

// age = 29;

// if (age > 20) {
//   let isOld = true;
//   console.log(isOld);
// }

// const add = (a:number, b:number = 1) => a + b;
// // default arguments should come at last after non-default parameter

// console.log(add(2));

// // const printOutput = (output: string | number) => console.log(output);
// const printOutput: (a:number|string) => void = output=> console.log(output);

// const button = document.querySelector('button')

// button?.addEventListener('click', event => {
//   console.log(event)
// })

// printOutput(add(2,10));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);
// The Spread Operator ... is every useful to pull out elements from array

const person = {
  firstName: "Kevin",
  age: 29,
};

const copiedPerson = { ...person };
// The Spread Operator ... also works for objects

// Rest Parameters ... is used to combined unknown number of inputs into an array
const add1 = (...numbers: number[]) => {
  // return numbers.reduce((curResult, curValue)=> {
  //   return curResult + curValue;
  // },0);
  let res = 0;
  numbers.forEach((number) => {
    res += number;
  });
  return res;
};

console.log(add1(5, 12, 3, 7, 6.4));

// Rest Parameters ... could also work with known number of inputs
const add2 = (...numbers: [number, number, number]) => {
  // return numbers.reduce((curResult, curValue)=> {
  //   return curResult + curValue;
  // },0);
  let res = 0;
  numbers.forEach((number) => {
    res += number;
  });
  return res;
};

console.log(add2(5, 12, 3));




// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// Array Destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies)

const {firstName: userName, age} = person;
// assign alias to firstName by using : 

console.log(userName, age);