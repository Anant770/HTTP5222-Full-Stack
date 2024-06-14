import { addItem,ItemCount } from "./demoModule.js";//importing the functions from the demoModule
//example of blocking code
addItem('apples');
console.log("apples added");
addItem('oranges');
console.log("oranges added");
addItem('bananas');
console.log("bananas added");
addItem('pears');
console.log("pears added");

//number of items in list
console.log("Number of items-",ItemCount());

//setTimeout is non-blocking
console.log("Before timeout");
setTimeout(() =>{
    console.log("timeout");
},3000);
console.log("After timeout");
/*
The "Before timeout" log will execute synchronously and immediately.
The setTimeout function is scheduled to execute after 2000 milliseconds, 
but it doesn't block the execution of the subsequent code.The "After timeout" log 
will execute immediately after the setTimeout is scheduled, without waiting for it to finish.
*/