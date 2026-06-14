// what is recursion?
// recursion is a method of solving problems where the solution depends on solutions to smaller instances of the same problem.
// mathematically, recursion is defined as the process of defining a function in terms of itself.

// example:
// fibonacci series: f(n) = f(n-1) + f(n-2)

// stack memory are based on stack data structure
// stack are also LIFO (Last In First Out)

// the element inserting into the stack and deleting from the stack is done using push() and pop() methods respectively

// let stack = [];

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

// console.log(stack);

// stack.pop();
// stack.pop();

// console.log(stack);

//peak element is the top element of the stack or the element which is inserted last

//stackoverflow means stack is full
//stack underflow means stack is empty

// ================================
// main();

// function main() {
//   console.log("Mai main hoon");
//   fun();
// }

// function fun() {
//   console.log("Party ho rai hai");
//   temp();
// }

// function temp() {
//   console.log("logging...");
// }
// ================================

// in the stack memory: pehle main() then fun() then temp() push hogi , phir jab pop() method run hoga toh temp() then  fun() then main() pop hogi

// Eg of recursion: if we have to find the sum of first 5 natural numbers
// n = 5

// 1 + 2 + 3 + 4 + 5

function sum(n) {
  // base case
  if (n == 1) {
    return 1;
  }

  // recursive case
  return n + sum(n - 1);
}

console.log(sum(5));

// sum(5) -> 5 + sum(4)
// sum(4) -> 4 + sum(3)
// sum(3) -> 3 + sum(2)
// sum(2) -> 2 + sum(1)
// sum(1) -> 1

// recursive leap of faith: we assume that the function call is working as expected eg: sum(n-1) is working as expected

// recursion is the function calling again and again itself, untill and unless we find the base case condition. which prevents the infinite recursion (stack overflow)

// ==========================================

function factorial(n) {
  // base case
  if (n == 1) {
    return 1;
  }

  // recursive case
  return n * factorial(n - 1);
}

// factorial(5) -> 5 * factorial(4)
// factorial(4) -> 4 * factorial(3)
// factorial(3) -> 3 * factorial(2)
// factorial(2) -> 2 * factorial(1)
// factorial(1) -> 1

console.log(factorial(5));

// ====================================

// loop vs recursion
// recursion : it give accessibity of currect, future, past state . it is used when we have to solve the problem in divide and conquer method or when we have to solve the problem in backtracking.
// loop : it give accessibity of currect and future state . it is used when we have to solve the problem in linear way.

// why we use recursion?
// 1. when we have to solve the problem in divide and conquer method
// 2. when we have to solve the problem in backtracking
// 3. when we have to solve the problem in recursive way

// q1
// print "hello world" n times

//==================================

// let prompt = require('prompt-sync')();

// let n = prompt("Enter the value of n: ");

// function printHello(n) {
//   // base case
//   if (n == 0) {
//     return;
//   }

//   // recursive case
//   console.log("hello world");
//   printHello(n - 1);
// }

// printHello(n);

//==================================

// let prompt = require('prompt-sync')();

// let n = prompt("Enter the value of n: ");

// function printHello(n) {
//   // base case
//   if (n == 0) {
//     return;
//   }

//   // recursive case
//   console.log("hello world");
//   //   printHello(n--); // this is wrong, n-- will first print then decrement
//   //   so it will not terminate

//   printHello(--n); // this is correct, --n will first decrement then print
// }

// printHello(n);

//==================================

// function printN(n){
//     if(n==0) return;

//     console.log(n);
//     printN(n-1);
// }

// printN(5); // output: 5 4 3 2 1

// function printN(n){
//     if(n==0) return;

//     printN(n-1);
//     console.log(n);
// }

// printN(5); // output: 1 2 3 4 5

//===========================================

function findSum(n) {
  if (n == 1) return n;
  return n + findSum(n - 1);
}
 
console.log(findSum(5));
