//DEMO BLOCKING VS NON-BLOCKING SCRIPT
//The three lines of code below are examples of sequential (blocking) code.
console.log("1"); //this line blocks line 4 from running first
console.log("2");
console.log("3");

//This click handler is an example of non-blocking code because it doesn't prevent line 13 from executing first
document.getElementById("click").addEventListener("click", function() {
  console.log("I've been clicked");
  console.log("Done");
})

console.log("After the click code");