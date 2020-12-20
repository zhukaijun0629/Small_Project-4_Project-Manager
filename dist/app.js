"use strict";
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Kevin" }, { age: 30 });
const mergedObj2 = merge(mergedObj, { hobbies: "Reading books" });
console.log(mergedObj.name, mergedObj.age, mergedObj2.hobbies, mergedObj2);
function countAndDescribe(element) {
    let descriptionText = "Got no Value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Kevin" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        else {
            this.data.splice(this.data.indexOf(item), 1);
        }
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Kevin");
textStorage.addItem("Lynn");
textStorage.removeItem("Kevin");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    // return { title: title, description: description, completeUntil: date };
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ["Kevin", "Lynn"];
// names.push("Ethan");
