//leetcode 53:Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Kadane’s Algorithm,

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = 0;
let currentSum = 0;

for (let i = 0; i < arr.length; i++) {
  if (i == 0) {
    currentSum = arr[i];
    maxSum = arr[i];
  } else {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
  }
  maxSum = Math.max(currentSum, maxSum);
}

console.log(maxSum);
