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

// const prompt = require("prompt-sync")();

// let year = +prompt("Enter a year: ");

// if (year % 4 == 0 && year % 100 !== 0) {
//   console.log("It's a Leap Year");
// } else if (year % 400 == 0) {
//   console.log("It's a Leap Year");
// } else {
//   console.log("It's not a leap Year");
// }

// ====================================

// let isPrime = function (n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;
//   for (let i = 3; i * i <= n; i += 2) {
//     if (n % i == 0) return false;
//   }
//   return true;
// };
// var countPrimes = function (n) {
//   let count = 0;
//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }

//   return count;
// };

// console.log(countPrimes(10));

// ====================================

// let prompt = require("prompt-sync")();
// let day = +prompt("Enter a day: ");


// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// ====================================

// let prompt = require("prompt-sync")();
// let marks = Number(prompt("Enter your marks: "));


// switch(true){
//   case marks >=90 && marks <=100:
//     console.log("Grade A");
//     break;
//   case marks >= 80 && marks < 90:
//     console.log("Grade B");
//     break;
//   case marks >= 70 && marks < 80:
//     console.log("Grade C");
//     break;
//   case marks >= 60 && marks < 70:
//     console.log("Grade D");
//     break;
//   case marks >= 0 && marks < 60:
//     console.log("Grade F");
//     break;
//   default:
//     console.log("Invalid marks");
// }


// ====================================

// let prompt = require("prompt-sync")();

// let consonents = 0;
// let vowels = 0;

// let s = prompt("Enter a string: ");

// for(let i = 0; i< s.length; i++){
//   let ch = s[i].toLowerCase();
//   switch(ch){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       vowels++;
//       break;
//     default:
//         consonents++;
//   }
// }
// console.log("Vowels: " + vowels);
// console.log("Consonants: " + consonents);



// ====================================

// let prompt = require("prompt-sync")();


// console.log("Enter 1 for area of rectangle");
// console.log("Enter 2 for area of circle");
// console.log("Enter 3 for area of triangle");

// let n = +prompt("Enter a number: ");

// switch(n){
//   case 1:
//     let len = Number(prompt("Enter the length: "));
//     let breadth = Number(prompt("Enter the breadth: "));
//     console.log("Area: " + (len * breadth));
//     break;
  
//   case 2:
//     let radius = Number(prompt("Enter the radius: "));
//     console.log("Area: " + (Math.PI * radius * radius).toFixed(2));
//     break;
//   case 3:
//     let base = Number(prompt("Enter the base: "));
//     let height = Number(prompt("Enter the height: "));
//     console.log("Area: " + (0.5 * base * height).toFixed(2));
//     break;
//   default:
//     console.log("Invalid choice");
// }



// day - 7 & 8, look at the lacture videos for more examples

// ====================================

// let prompt = require("prompt-sync")();

// let n = +prompt("Enter a Number: ")

// for(let i = 1; i <= n; i++){
//   console.log(i);
// }


// ====================================

// let prompt = require("prompt-sync")();

// let n = +prompt("Enter a Number: ")

// for(let i = n; i >= 1; i--){
//   console.log(i);
// }



// ====================================

// take a number as input and print its table
// let prompt = require("prompt-sync")();

// let n = +prompt("Enter a Number: ");

// for(let i = 1; i <= 10; i++){
//   console.log(`${n} x ${i} = ${n * i}`);
// }

// ====================================


// sum upto n terms

// let prompt = require('prompt-sync')();
// let n = +prompt("Enter a Number: ")
// let sum = 0;
// for(let i = 0; i<=n; i++){
//   sum += i;
// }
// console.log("Sum: " + sum);


// ====================================


// Print all the factors of number

// let prompt = require("prompt-sync")();
// let n = +prompt("Enter a Number: ")

// for(let i = 1; i<=n; i++){
//     if(n % i === 0){
//         console.log(i);
//     }
// }




// ====================================
// ====================================
// ====================================
// ====================================
// ====================================
// ====================================
// ====================================
// ====================================
// ====================================
// ====================================
// ====================================
