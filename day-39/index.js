// GCD of two numbers

// 20-> 1,2,4,5,10,20
// 36-> 1,2,3,4,6,9,12,18,36
// the GCD of 20 and 36 is 4

// let a = 20, b = 36;

// let temp = Math.min(a, b);

// for (let i = temp; i > 0; i--) {
//     if (a % i === 0 && b % i === 0) {
//         console.log(i);
//         break;
//     }
// }

// let prompt = require("prompt-sync")();
// let a = parseInt(prompt("Enter a number: "));
// let b = parseInt(prompt("Enter a number: "));

// let temp = Math.min(a, b);

// for(let i = temp; i>=1; i--){
//     if(a % i === 0 && b % i === 0){
//         console.log(i);
//         break;
//     }
// }

// ===============================

// lets do it with recursion

// let prompt = require("prompt-sync")();
// let a = parseInt(prompt("Enter a number: "));
// let b = parseInt(prompt("Enter a number: "));

// function gcd(n, a, b) {
    // if(n==1) return 1;
//   if (a % n == 0 && b % n == 0) {
//     return n;
//   }
//   return gcd(n - 1, a, b);
// }

// console.log(gcd(Math.min(a, b), a, b));


// ==========================

// print 1 to 1000

// function sum(n){
//     if(n==1){
//         return 1;
//     }
//     return n + sum(n-1)
// }
// console.log(sum(1000))


// function hello(n){
//     if(n==0){
//         return;
//     }
//     console.log("Hello");
//     hello(n-1);
// }
// hello(5)

// in the above two function, jab recursive function bus print kare aur koi value expect na kare toh the function is called tail recursive function, else it is called head recursive function.

// tail recursive function main return lagane ki zarurat nhi hoti hai but head recursive function main return lagana must hai.


// ============================

// another approach

// let a = 20, b = 36;
//         20       16 (36 - 20)
//         4        16 (20 - 4)
//         4        12 (16 - 4)
//         4        8 (12 - 4)
//         4        4 (8 - 4)


// let a = 48 , b = 27
//         21       27 (48 - 27)
//         21       6  (27 - 21)
//         15       6  (21 - 6)
//         9        6  (15 - 6)
//         3        6  (9 - 6)
//         3        3  (6 - 3)


// =======================================

// let prompt = require("prompt-sync")();
// a = parseInt(prompt("Enter a number: "));
// b = parseInt(prompt("Enter a number: "));



// function gcd(a,b){
//     if(a==b){
//         return a;
//     }
//     if(a>b){
//         return gcd(a-b,b);
//     }
//     return gcd(a,b-a);
// }
// console.log(gcd(a,b))

//O(max(a,b)) -->

// let a = 20, b = 36;
//         20       16 
//         4        16 
//         4        12 
//         4        8 
//         4        4 

//==========================================

//Euclidean algorithm

// 20   36
// 36   16 (36 % 20)
// 16    4 (36 % 16)
// 4     0  (16 % 4)

// b hamesha 0 ho jeyegi aur a answer ho jayega

let prompt = require("prompt-sync")();
a = parseInt(prompt("Enter a number: "));
b = parseInt(prompt("Enter a number: "));


function gcd(a,b){
    if(b==0){
        return a;
    }
    return gcd(b,a%b)
}
console.log(gcd(a,b))

// O(log(min(a,b)))


