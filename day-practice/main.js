// console.log(Math.floor(10/3))
// console.log(Math.ceil(10/3))
// console.log(Math.floor(16/3))

// console.log(10%5)
// console.log(10%4)

// let n = 45797

// console.log(Math.floor(n/10))
// console.log(n)

// let a = -13.33
// let b =12
// console.log(Math.abs(a))
// console.log(Math.abs(b))
// console.log(Math.floor(a))
// console.log(Math.ceil(a))
// console.log(Math.round(a))

// let x = 12.30230

// console.log(Math.trunc(x))
// console.log(Math.pow(4,2))

// console.log(Math.max(19, 13, 78, 48, 57, 88, 298)); // return the max value

// console.log(Math.min(19, 13, 78, 48, 57, 88, 298)); // return the minimum value

// console.log(Math.random()); // gives random value from 0 to 1

// console.log(Math.random().toFixed(2)); // gives value after .

// let age = 3

// if(age >= 18){
//     process.stdout.write("You can vote")
// }else{

//     process.stdout.write("You can't vote")
// }

// let a = 23;
// let b =32;

// if(a>b){
//     console.log(`${a} is a bigger value`)
// }else{
//     console.log(`${b} is a bigger value`)
// }

// let n = 33;

// if(n%2 === 0){
//     console.log("the number is even");
// }else{
//     console.log("the number is odd");
// }

// const prompt = require("prompt-sync")();

// const name = prompt("Enter your name: ");

// console.log(`Hello ${name}`);

// let prompt = require("prompt-sync")()

// let principal = +(prompt("Enter Principal amounnt "))
// let rate = +(prompt("Enter rate "))
// let time = +(prompt("Enter Time "))

// console.log((principal*Math.pow(1 + (rate/100), time)-principal).toFixed(2))

// let OTP = Math.trunc(Math.random()*9000) + 1000;

// console.log(OTP);

// console.log(Math.PI);

// const prompt = require("prompt-sync")()

// let age = +prompt("Enter your Age: ")

// console.log(`Your age is ${age}`)

// if(age >= 18){
//     console.log("You can Vote")
// }else{
//     console.log("You can't Vote")
// }

// const prompt = require("prompt-sync")()

// let marks = +prompt("Enter Your Score: ")
// if(marks > 85 && marks <= 100){
//     console.log("Excellent")
// }else if(marks > 80 && marks <= 85){
//     console.log("Very Good")
// }else if(marks > 70 && marks <= 80){
//     console.log("Good")
// }else{
//     console.log("Study Hard!!!")
// }

// const prompt = require("prompt-sync")()

// let n = +prompt("Enter a Number: ")

// if(n%2 == 0){
//     console.log("The number is Even Number")
// }else{
//     console.log("The Number is Odd Number")
// }

// const prompt = require("prompt-sync")();

// let a = +prompt("Enter a: ");
// let b = +prompt("Enter b: ");
// let c = +prompt("Enter c: ");

// if (a > b && a > c) {
//   console.log(`${a} is the largest number`);
// } else if (b > a && b > c) {
//   console.log(`${b} is the largest Number`);
// } else {
//   console.log(`${c} is the largest number`);
// }

// ===============================

// accept a year and check if its a leap year or not

// const prompt = require("prompt-sync")();

// let year = Number(prompt("Enter a Year: "));

// if (year % 4 == 0 && year % 100 !== 0) {
//   console.log("It's a Leap Year");
// } else if (year % 400 == 0) {
//   console.log("It's a Leap Year");
// } else {
//   console.log("It's Not a Leap Year");
// }

// ====================================

const prompt = require("prompt-sync")();

let year = +prompt("Enter a year: ");

if (year % 4 == 0 && year % 100 !== 0) {
  console.log("It's a Leap Year");
} else if (year % 400 == 0) {
  console.log("It's a Leap Year");
} else {
  console.log("It's not a leap Year");
}
