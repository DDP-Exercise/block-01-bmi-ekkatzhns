"use strict";

const LINE = "-----------------------------------------------------";

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let age = Number(prompt("Enter your age (years):"));
let height = Number(prompt("Enter your height in cm (e.g. 181):"));
let weight = Number(prompt("Enter your weight in kg:"));

let gender;

do {
    gender = prompt("Enter calculation method (male/female):").toLowerCase();
} while (gender !== "male" && gender !== "female");

let bmr, bmi, normal, danger;

if (gender === "female") {
    bmr = 655 + 10 * weight + 2 * height - 6 * age;
} else {
    bmr = 66 + 14 * weight + 5 * height - 7 * age;
}

bmi = (10000 * weight) / (height * height);

if (bmi >= 18 && bmi <= 25) {
    normal = "Yes";
} else {
    normal = "No";
}

if (bmi < 16 || bmi >= 30) {
    danger = "Yes";
} else {
    danger = "No";
}

console.log(LINE);
console.log("Name:\t\t\t" + lastName.toUpperCase() + ", " + firstName);
console.log(LINE);
console.log("Age:\t\t\t" + age + " Years");
console.log("Height:\t\t\t" + (height / 100).toFixed(2).replace(".", ",") + "m");
console.log("Weight:\t\t\t" + weight + " kg");
console.log("Basal Metabolic Rate:\t" + Math.round(bmr) + " kcal");
console.log("Body Mass Index:\t" + bmi);
console.log("Normal Weight:\t\t" + normal);
console.log("Danger:\t\t\t" + danger);
console.log(LINE);