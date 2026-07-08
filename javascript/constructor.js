// function Dog(name, breed, age, weightinKgs=90) {
// // this(); (this line is implied when you use the new keyword)
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//     this.weightinKgs = weightinKgs;
//     // Adding methods to the object
//     this.eat = function () {
//     console.log("Chomp");
//     };
//     this.bark = function () {
//     console.log("Woof!");
// };
// // return this; (this line is also implied with the new keyword)
// }
// const dogTheMarley = new Dog("Marley", "Pit", 3,30);
// console.log(dogTheMarley);



function student(name, id,email,phone,address,course,year) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.course = course;
    this.year = year;
    
    this.updateAddress = function () {
        console.log("Address updated");
    }   
    this.updateEmail = function () {
        console.log("Email updated");
    }      
    this.updatePhone = function () {
        console.log("Phone updated");
    }   
    this.updateYear = function () {
        console.log("Year updated");
    }   
    this.updateCourse = function () {
        console.log("Course updated");
    }   
    
}
let Student1=new student("Yashraj", 1290, "y@gmail.com",94737743, "GUJARAT", "CSE", 1);
console.log(Student1);