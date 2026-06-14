// Fibonacci number: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// let prompt = require('prompt-sync')();

// let n = prompt("Enter a number: ");

// let first = 0;
// let second = 1;

// process.stdout.write(first + " ");
// process.stdout.write(second + " ");

// for (let i = 1; i <= n-2; i++) {
//     let third = first + second;
//     process.stdout.write(third + " ");
//     first = second;
//     second = third;
// }

// ======================================

// recursive way to print fibo series
// let prompt = require("prompt-sync")()
// let n = +prompt("Enter a number: ");

// let first = 0;
// let second = 1;

// process.stdout.write(first + " ")
// process.stdout.write(second + " ")

// function fibo(n, first, second){
//     if(n==0) return;
//     if(n==1) return second;

//     let third = first + second;
//     process.stdout.write(third + " ");
//     fibo(n-1, second, third);
// }

// fibo(n-2, first, second);

// ======================================
// recursion tree of fibo(n)

// let prompt = require("prompt-sync")()
// let n = +prompt("Enter a number: ");

// function fibo(n){
//     if(n==0 || n==1) return n;

//     return fibo(n-1) + fibo(n-2);
// }

// console.log(fibo(n));

// ======================================
// sum of digits

// let prompt = require("prompt-sync")()
// let n = +prompt("Enter a number: ");

// function sumDigits(n){
//     if(n==0) return 0;
//     return (n%10) + sumDigits(Math.floor(n/10));
// }

// console.log(sumDigits(n));

// ======================================
// reverse of digits

// let prompt = require("prompt-sync")();
// let n = +prompt("Enter a number: ");

// function reverseDigits(n, rev = 0) {

//     if (n == 0) {
//         return rev;
//     }

//     rev = rev * 10 + (n % 10);

//     return reverseDigits(Math.floor(n / 10), rev);
// }

// console.log(reverseDigits(n));


//===================================


function printFibonacci(n) {

    if (n <= 0) {
        console.log("Invalid input");
        return;
    }

    function fibo(remaining, first, second) {

        if (remaining == 0) {
            return;
        }

        process.stdout.write(first + " ");

        fibo(remaining - 1, second, first + second);
    }

    fibo(n, 0, 1);
}


printFibonacci(0)