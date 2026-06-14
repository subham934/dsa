// problem on bit manipulation:

// swap two integers without useing third variable::

// let a = 10, b = 20;

// a= a ^ b;

// // we know
// // 20 = 1 0 1 0 0
// // 10 =  1 0 1 0

// // 20 = 1 0 1 0 0
// // 10 = 0 1 0 1 0
// // -------------------
// // 30 = 1 1 1 1 0

// // so  10 ^ 20 = 30, a = 30;

// b = a ^ b;

// //
// // 30 = 1 1 1 1 0
// // 20 = 1 0 1 0 0
// // -------------------
// // 10 = 0 1 0 1 0

// // so  30 ^ 20 = 10, b = 10

// a = a ^ b;

// // 30 = 1 1 1 1 0
// // 10 = 0 1 0 1 0
// // -------------------
// // 20 = 1 0 1 0 0

// // so 30 ^ 10 = 20, a = 20;

// console.log(a, b);

//=================================

// for a given number , the LSB is 1 then the number is odd otherwise it is even:::

// let prompt = require("prompt-sync")();

// let num = +prompt("enter the number : ");

// if ((num & 1) == 1) {
//   console.log("odd");
// } else {
//   console.log("even");
// }



//=================================

// setbit: jo bit 1 hoti hai wo setbit
// jo 0 hoti hai wo unsetbit

// there is n and i ,i.e., n,i

// let n = 14
// let i = 2;

// 14 =  1 1 1 0
// 2  =  0 0 1 0

// now we will do 14 >> 2

// so it will be 1110 >> 2 =>  11
// if it is setbit then it will print the value

// now we will do (14>>2) & 1

// (14>>2) =>  11
// 1       =>  01
// ------------------
// 1       =>  01

// so it is setbit

//=================================

// let n = 12;
// let i = 2;

// if ((n>>i) & 1) {
//     console.log("setbit");
// } else {
//     console.log("unsetbit");
// }

//===================================

// check if a number is power of 2 or not

// here, n can be 2,4,8,16,32,64,...

// jo bhi power of 2 hota hai uska MSB always 1 hota hai, baaki sab 0 hota hai:

//  2 = 1 0
//  4 = 1 0 0
//  8 = 1 0 0 0
//  16 = 1 0 0 0 0
//  32 = 1 0 0 0 0 0
//  64 = 1 0 0 0 0 0 0

let n = 16;

if((n & (n-1)) == 0){
    console.log("power of 2");
} else {
    console.log("not a power of 2");
}


