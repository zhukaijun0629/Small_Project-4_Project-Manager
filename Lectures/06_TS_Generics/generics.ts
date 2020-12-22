// const names: Array<string> = [];  //string[]
// // names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve,reject)=> {
//   setTimeout(()=> {
//     resolve('This is done!')
//   },2000);
// });

// promise.then(data => {
//   data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Kevin" }, { age: 30 });
const mergedObj2 = merge(mergedObj, { hobbies: "Reading books" });

console.log(mergedObj.name, mergedObj.age, mergedObj2.hobbies, mergedObj2);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no Value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Kevin" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    } else {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Kevin");
textStorage.addItem("Lynn");
textStorage.removeItem("Kevin");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const kevinObj = {name:"Kevin"};
// objStorage.addItem({ name: "Lynn" });
// objStorage.addItem(kevinObj);
// //...
// objStorage.removeItem(kevinObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // return { title: title, description: description, completeUntil: date };
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Kevin", "Lynn"];
// names.push("Ethan");
