function morning() {
    console.log("Hello good morning");
}

function greeting() {
    return function () {
        morning();
    };
}

const greet = greeting();
greet();
