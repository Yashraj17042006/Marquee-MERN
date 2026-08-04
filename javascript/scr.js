// laxman.webdev67@gmail.com

const form = document.getElementById("form");
const tableBody = document.querySelector("#table tbody");

let products = JSON.parse(localStorage.getItem("products")) || [];

displayProducts();


// store in local storage
function storeInLocalStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}



document.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        form.dispatchEvent(new Event('submit'));
    }
});



// Product Class
class Product {
    constructor(name, category, price, quantity) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }
}

// Form Submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = new Product(
        form.name.value,
        form.category.value,
        Number(form.price.value),
        Number(form.quantity.value)
    );

    products.push(product);

    storeInLocalStorage();

    displayProducts();

    form.reset();
});


// Display Products

function displayProducts() {

    tableBody.innerHTML = "";

    products.forEach((product, index) => {

        tableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
            <td>
                <button onclick="deleteProduct(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}
function deleteProduct(index) {
    // filteredProducts = products.filter((product, i) => i !== index);
    // products = filteredProducts;


    products.splice(index, 1);

    storeInLocalStorage();

    displayProducts();
}