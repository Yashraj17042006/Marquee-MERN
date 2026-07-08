function createPerson(name, age) {
return {
name: name,
age: age,
greet() {
console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
}
}
let manish = createPerson('Manish', 12);
manish.greet();
}