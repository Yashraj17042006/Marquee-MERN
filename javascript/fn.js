function morning() {
    console.log("Hello good morning");
}

function greeting() {
    return function () {
        morning();
    };
}
function add(a,b){
    return a+b;
}
console.log(add(5,5));

const greet = greeting();
greet();

const variable=function(){
    console.log("Hello");
};

function name(msg){
    return msg;
}
function hello(fn){
    console.log("Hello");
    let x=fn("Yash");
    console.log(x);

}
hello(name);
// high-order function 
function highOrder(a){
    return function(msg){
        console.log(msg);
    }       
}   
function hello(a){
    console.log("hey");
    console.log(a);
}
function exe(own){
    console.log("exe");
    own(2);
}
exe(hello);
