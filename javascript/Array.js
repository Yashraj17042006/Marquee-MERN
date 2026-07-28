

function BasicStudentDetails(name, email, phone) {
  const students = [
    {
      name: name,
      email: email,
      phone: phone
    }
  ];
  return students;
}





const items = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 50 },
  { name: 'Keyboard', price: 80 }
];
const totalPrice = items.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);

const percentageRate = 15;
const percentageAmount = (totalPrice * percentageRate) / 100;

console.log(`Total Price: $${totalPrice}`);
console.log(`${percentageRate}% of Total: $${percentageAmount}`);



// const students = [
//   {
//     name: 'Aarav Sharma',
//     email: 'aarav.sharma@example.com',
//     year: 1,
//     course: 'BCA',
//     phone: 9876543210,
//     isGraduated: false,
//     examScore: [
//       { subject: 'Java', marks: 82 },
//       { subject: 'HIML', marks: 91 },
//       { subject: 'Javascript', marks: 88 }
//     ]
//   },
//   {
//     name: 'Priya Patel',
//     email: 'priya.patel@example.com',
//     year: 2,
//     course: 'BBA',
//     phone: 9876543211,
//     isGraduated: false,
//     examScore: [
//       { subject: 'Java', marks: 75 },
//       { subject: 'HTML', marks: 89 },
//       { subject: 'JavaScript', marks: 84 }
//     ]
//   },
//   {
//     name: 'Sneha Joshi',
//     email: 'sneha.joshi@example.com',
//     year: 4,
//     course: 'B.Com',
//     phone: 9876543213,
//     isGraduated: true,
//     examScore: [
//       { subject: 'Java', marks: 85 },
//       { subject: 'HTML', marks: 93 },
//       { subject: 'JavaScript', marks: 90 }
//     ]
//   }
// ];


const cart = [
  { name: 'Laptop', quantity: 1, price: 55000 },
  { name: 'Mouse', quantity: 2, price: 700 },
  { name: 'Keyboard', quantity: 1, price: 1500 },
  { name: 'Monitor', quantity: 2, price: 12000 },
  { name: 'Headphones', quantity: 1, price: 2500 },
  { name: 'USB Cable', quantity: 3, price: 250 },
  { name: 'Webcam', quantity: 1, price: 3200 },
  { name: 'External Hard Drive', quantity: 1, price: 4800 },
  { name: 'Laptop Stand', quantity: 2, price: 900 },
];

let arrayOfMarks = students.map((student) => {
  return student.examScore.reduce((acc, curr) => curr.marks + acc, 0);
});
let sortedArray = arrayOfMarks.sort((a, b) => b - a);
console.log(arrayOfMarks);
console.log(`Highest Marks: ${sortedArray[0]}`);
function sendEmail (student) {
  console.log(`Sending email to ${student.email}...`);  
}