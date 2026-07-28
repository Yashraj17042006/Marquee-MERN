function createArray() {
  const items = [];
  return {
    push: (element) => items.push(element),
    getElement: (index) => items[index],
    getArray: () => items
  };
}

const myArray = createArray();
myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push(50);

console.log(myArray.getElement(4)) ? console.log(myArray.getElement(4)) : console.log("Element at index 4 does not exist.");
console.log(myArray.getArray());

