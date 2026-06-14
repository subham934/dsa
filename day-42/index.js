
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).


// function solve(x,n){
//     if(n==0){
//         return 1;
//     }

//     let ans = solve(x, Math.floor(n/2));

//     if(n%2 == 0){
//         return ans * ans;
//     }else{
//         return ans * ans * x;
//     }
// }

// var myPow = function (x, n) {
//   if (n == 0) return 1;  
//   if(n<0){
//     n = -n;
//     return 1/solve(x,n)
//   }
//   return solve(x,n);
// };


// console.log(myPow(2, 10));

// =========================================

var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n === 1) return x;

  if (n % 2 === 0) {
    const half = myPow(x, n / 2);
    return half * half;
  } else {
    const half = myPow(x, (n - 1) / 2);
    return x * half * half;
  }
};

console.log(myPow(2, -2));
console.log(myPow(2, 10));
console.log(myPow(2.392, 3));





