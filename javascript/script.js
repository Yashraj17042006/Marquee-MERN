console.log("Hello World");
alert("Hello");
//document.write("hello"); (write on webpage) not used because it overwrites the whole document upon reloading.
// var globalVariable="I am a global variable"; //global variable
// console.log(globalVariable);
// console.log(globalFunction());
// globalFunction();
// console.log("Global Execution context ends");
// var globalFunction=function(){
//     console.log("I am a global function");
//     console.log(localVariable);
//     var localVariable="I am a local variable";
//     console.log(localVariable);
//     return "I am a return value";
// }
// console.log("Global Execution context ends");
debugger;
console.log('Global Execution Context Start');

var globalVariable = 'I am a global Variable';

console.log(globalVariable);
console.log(greet());
greet();

console.log('Global Execution Context End');

// Function Declaration
function greet() {
  var name = 'Hastag';
  console.log('Inside Global Function');
  return 900;
}