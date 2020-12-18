function add(n1: number, n2:number) {
  return n1+n2;
}

function printResult(num: number) {
  console.log('Result: '+num);
}

// Add in callback as the third parameter
function addAndHandle(n1: number,n2:number,cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5,12));


// Function Type:   (inputs types) => output type
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8,8));

addAndHandle(10,20,(result)=>{
  console.log(result)
});

