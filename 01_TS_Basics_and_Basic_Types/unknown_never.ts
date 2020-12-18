// unknown is a better type to use instead of any
// since unknown is more strict with the specific type before you try to use the variable 
// which forces you to do a extra type check
let userInput: unknown;
let userName: string;


userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput
}


// Function Return Type: never, which means this function never returns anything
// Typically like a error function which intentially tries to break the script
function generateError(message: string, code: number): never {
  throw {message:message,errorCode: code};
}

generateError('An error occurred!', 500);