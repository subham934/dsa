// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// function mySqrt(x) {
//   for (let i = 1; i <= x; i++) {
//     if (i * i == x) {
//       return i;
//     } else if (i * i > x) {
//       return i - 1;
//     }
//   }
// }

// console.log(mySqrt(64));

// ====================================
// Another solution

// function mySqrt(n) {
//   let i = 0;
//   for (; i * i <= n; i++) {
//     if (i * i == n) {
//       return i;
//     }
//   }
//   return i - 1;
// }

// console.log(mySqrt(25));

// =====================================
// while loop solution

// function mySqrt(x) {
//   let i = 1;
//   while (i * i <= x) {
//     if (i * i == x) {
//       return i;
//     }
//     i++;
//   }
//   return i - 1;
// }

// console.log(mySqrt(25));

// ======================================
// Binary search method

// function mySqrt(x) {
//   let left = 0;
//   let right = x;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (mid * mid == x) {
//       return mid;
//     } else if (mid * mid > x) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return right;
// }

// console.log(mySqrt(20));

function mySqrt(x) {
  let first = 0;
  let last = x;
  let ans = 0;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (mid <= Math.floor(x / mid)) {
      ans = mid;
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return ans;
}

console.log(mySqrt(40));
