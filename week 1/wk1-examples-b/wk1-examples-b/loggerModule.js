//MODULE EXAMPLE
//The logger is for logging messages to the console.
var privateMessage = "My hidden message";


export function getMessage() {
  console.log(privateMessage);
}

export function setMessage(newMsg) {
  privateMessage = newMsg;
}