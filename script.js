console.log("Hello, World!");
console.log("From script.js file.");

const myName = "Kimberly";
let age = 20;
let number = "09509783567";
let address = "Silay City";
let addnumber = 67;

console.log(`Name: ${myName}`);
console.log(`Age: ${age} years old`);
console.log(`number: ${number}`);
console.log(`address: ${address}`);
console.log(67);

   function greet(greetings,name = []) {
    if (Array.isArray(name)) {
        name = name.join(", ");
    return `${greetings} sa enyu, ${name}`;
}
    }
console.log(greet("mayung aga", ["Kimberly", "Bai", "Soy", "Tol", "Erp"]));

const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const serviceHeading = document.querySelector("#services h2");
console.log(serviceHeading);