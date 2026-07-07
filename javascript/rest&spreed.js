function collectValues(...args) {
    console.log(...args);
}

let values = [1,2,3,'Hello'];
collectValues(...values);

let[val1,val2,val3, ...rest] = [ ...values];
console.log(val1);
console.log(val2);
console.log(rest);
