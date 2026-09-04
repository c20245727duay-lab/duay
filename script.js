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
heading.textContent = "Philip Duay";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "60px";
console.log(heading);

heading.addEventListener("click", function (){
    heading.style.color = "red";
    console.log("Heading was clicked!");
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const serviceHeading = document.querySelector("#services h2");
console.log(serviceHeading);

const toggleButton = document.querySelector("#switch");
const body = document.querySelector("body");
let isOff = false;


toggleButton.addEventListener("click", function () {
   isOff = !isOff;


    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }

})
