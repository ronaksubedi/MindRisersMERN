// create an object called student with the following properties:

// name

// age

// course
// Write a function that prints all values of the object.

const std = {
  fullName: "Ronak Subedi",
  age: 24,
  course: "Bachelor in Information Technology",
  show() {
    console.log(
      `${this.fullName} study ${this.course} in our university. His age is ${this.age} `
    );
  },
};
std.show();
// Task 2: Object Property Access
// Given an object user with properties id, email, and isActive:
// Access properties using dot notation
// Access the same properties using bracket notation
const user = {
  id: 1,
  email: "example@gmail.com",
  isActive: true,
  properties() {
    console.log("Id:-", this.id);
    console.log("Email:-", this.email);
    console.log("IsActive:-", this.isActive);
    // example of bracket notation
    console.log("Id (bracket):", this["id"]);
  },
};
user.properties();

// Task 3: Modify Object
// Create an object product with:
// name
// price
// Write a function that:
// Updates the price
// Adds a new property inStock
const product = {
  pName: "Acer Laptop",
  price: 2500000,
  pshow(newPrice) {
    this.price = newPrice;
    this.inStock = true;
  },
};

product.pshow(350000000);
console.log(product);
