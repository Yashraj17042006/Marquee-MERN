

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


