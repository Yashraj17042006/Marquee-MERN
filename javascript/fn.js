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
