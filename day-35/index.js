// Bit manipulation is a programming technique that involves operating directly on the individual bits (0s and 1s) of a binary number

// Eg: &, |, ^, ~, <<, >>

// Binary Numbers:(0,1)
// Decimal: (0,1,2,3,4,5,6,7,8,9)
// Octal: (0,1,2,3,4,5,6,7)
// Hexadecimal: (0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F)

// => there is other way to present the data too.
// we will use bitwise operators to operate on the bits of a number

// Bitwise operators directly binary bits (0 aur 1) par kaam karte hain.
// JavaScript mein numbers internally binary form mein represent hote hain, aur bitwise operators un bits ko manipulate karte hain.

// Convert a decimal into binary
// n = 14

// eg: 14
// 14 % 2 = 0
// 7 % 2 = 1
// 3 % 2 = 1
// 1 % 2 = 1

// 1 1 1 0 => 14

// What the algorithm is doing

// This process:

// 14 % 2 = 0
// 7 % 2 = 1
// 3 % 2 = 1
// 1 % 2 = 1

// is repeatedly:

// dividing the decimal number by 2
// storing the remainder
// reading remainders from bottom to top

// =============================
// Why divide by 2?

// Because binary is base 2.

// Just like:

// decimal uses powers of 10
// binary uses powers of 2

// =============================

// Let’s verify 1110 really means 14

// Binary number:

// 1110

// Expanding it:

// 1×2³ + 1×2² + 1×2¹ + 0×2⁰

// which becomes:

// 8 + 4 + 2 + 0
// = 14

// So:

// 1110₂ = 14₁₀

// =============================

// n = 25
// 25 % 2 = 1
// 12 % 2 = 0
// 6 % 2 = 0
// 3 % 2 = 1
// 1 % 2 = 1

// 1 1 0 0 1 => 25

// =============================

// let prompt = require("prompt-sync")();
// let n = +prompt("Enter a decimal number: ");
// let ans = "";


// while (n > 0) {
//   let bit = n % 2;
//   ans = bit + ans;
//   n = Math.floor(n / 2);
// }

// console.log(ans);

// ====================================


//  let prompt = require("prompt-sync")();

// let bin = +prompt("Enter a binary number: ");

// let deci = 0;
// let count = 0;

// while (bin > 0) {

//     let bit = bin % 10;

//     deci = deci + bit * Math.pow(2, count);

//     bin = Math.floor(bin / 10);

//     count++;
// }

// console.log(deci);

// ====================================


// what is bitwise operator?


// Bitwise operators directly binary bits (0 aur 1) par kaam karte hain.

// JavaScript mein numbers internally binary form mein represent hote hain, aur bitwise operators un bits ko manipulate karte hain.

// Main Bitwise Operators
// Operator	Name
// &	AND
// `	`
// ^	XOR
// ~	NOT
// <<	Left Shift
// >>	Right Shift


//====================================

// for 9 & 5

// 9
// 1 0 0 1
// &
// 5
// 0 1 0 1

// 1 0 0 1
// &
// 0 1 0 1
// ------------
// 0 0 0 1 => 1



// =====================================

// for 15 & 5

// 15
// 1 1 1 1
// &
// 5
// 0 1 0 1
// ------------
// 0 1 0 1 => 5
// console.log(15 & 5);

// ====================================

// for  9 | 5

// 9
// 1 0 0 1
// |
// 5
// 0 1 0 1
// ----------
// 1 1 0 1 => 13

// console.log(9 | 5);

// ====================================


// for 12 ^ 5

// 12
// 1 1 0 0
// ^
// 5
// 0 1 0 1
// ---------
// 1 0 0 1 => 9
// console.log(12 ^ 5);

// ====================================

// for 9 ^ 5

// 9
// 1 0 0 1
// ^
// 5
// 0 1 0 1
// ----------
// 1 1 0 0 => 12

// console.log(9 ^ 5);

// ====================================


// for  ~ 9
// its formula is -(n+1)
// 9
// 0 0 0 0
// ~
// 1 1 1 1
// ----------
// -10

// console.log(~9);

// ====================================

// for 9 << 2

// 9 = 1001
// 1 0 0 1
// <<
// 2
// --------
// 1 0 0 1 0 0 => 36

// console.log(9 << 2);


// for 25 << 2
// 25
// 1 1 0 0 1
// <<
// 2
// --------
// 1 1 0 0 1 0 0 => 100

// console.log(25 << 2);

//===============================

// for 9 >> 2

// 9
// 1 0 0 1
// >>
// 2
// --------
// 0 0 1 0 => 2

// console.log(9 >> 2);


// for 25 >> 2

// 25
// 1 1 0 0 1
// >>
// 2 (remove the last 2 bits)
// --------
// 0 0 1 1 0 => 6

// ====================================

// for  9 && 5

// 9
// 1 0 0 1
// &&
// 5
// 0 1 0 1
// ---------
// 0 0 0 1 => 1

// console.log(9 && 5);



// for 9 || 5

// 9
// 1 0 0 1
// ||
// 5
// 0 1 0 1
// ---------
// 1 1 0 1 => 13

// console.log(9 || 5);





// ====================================


// let t = 6;
// let h = 9;
// let x = 0;
// let c;

// if (h > t) {
//     for (c = t; c < h; c = c + 1) {
//         x = x + c;
//     }
//     console.log(x);
// } else {
//     console.log("error");
//     console.log(x);
// }

// ====================================

// let array1 = [2, 3, 56, 34];
// let a = 3, n = 4;

// for (let k = 0; k <= n - 1; k++) {
//     array1[n] = array1[0];
//     for (let j = 0; j <= n - 1; j++) {
//         array1[j] = array1[j + 1];
//     }
// }

// for (let k = 0; k <= n - 1; k++) {
//     console.log(array1[k]);
// }
// ====================================

// let a = 0;
// let b;
// for (let i = 0; i <= 4; i++) {
//     a = a + 1;
//     if (i === 3) {
//         console.log("Hello");
//         break;
//     }
// }
// console.log(a);

// ===================================

// let a = 5;
// let b = 6;
// let c;
// let v = 90;

// while (v > 8) {
//     a = a + v;
//     c = (a + b) % 10;

//     while (c > 9) {
//         b = b - a;
//         c = c - 1;
//     }

//     v = Math.floor(v / 2);
// }

// console.log(b, c);






// let arr = [
//     [0, 2],
//     [1, 3]
// ];

// arr[0][0] = arr[0][1] & arr[1][0];

// if ((arr[0][1] & 6) < arr[0][1]) {
//     arr[1][1] = 4 + arr[1][1];
// }

// arr[0][1] = (arr[1][1] + 4) ^ arr[0][1];

// if ((1 + 3) < (7 - arr[1][1])) {
//     arr[0][1] = (arr[0][1] + 4) + arr[0][1];
// } else {
//     arr[0][1] = (8 + 11) & arr[1][1];
// }

// console.log(arr[1][1] + arr[0][1] + arr[1][1]);





// let arr = [2, 3, 3, 4];

// arr[2] = (6 + 7) + arr[3];

// if ((1 + 7 + arr[0]) < (7 ^ arr[1])) {
//     arr[1] = arr[3] + arr[0];
// } else {
//     arr[3] = arr[2] + arr[1] + arr[1];
// }

// if ((arr[3] + arr[0]) > (arr[0] - arr[3])) {
//     arr[3] = (10 & 8) + arr[2];
// }

// console.log(arr[1] + arr[2] + arr[3]);




// function funn(a, b, c) {
//     for (c = 3; c <= 4; c++) {
//         b = 2 & c;
//         if ((b + a) < (a - b)) {
//             a = c + a;
//         }
//     }
//     return a + b;
// }

// console.log(funn(3,5,8));




function funn(a, b, c) {
    c = b + c;
    b = (b + b) + b;
    c = (10 + 6) & a;
    c = (4 + 8) & b;
    b = (a + c) & c;
    return a + b + c;
}

console.log(funn(1,2,7));
