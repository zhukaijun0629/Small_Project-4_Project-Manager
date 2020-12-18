// unknown is a better type to use instead of any
// since unknown is more strict with the specific type before you try to use the variable 
// which forces you to do a extra type check
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
