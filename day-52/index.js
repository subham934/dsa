// leetcode 42 - Traping Rain Water problem

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// prefix and suffix approach

// let arr = [4,2,0,3,2,5]
// let arr = [0,1,0,2,1,0,1,3,2,1,2,1];

// let n = arr.length;

// let left = new Array(n);
// let right = new Array(n);

// left[0] = arr[0];
// right[n-1] = arr[n-1];

// for(let i=1; i<n; i++){
//     left[i] = Math.max(left[i-1], arr[i]);
// }

// for(let i=n-2; i>=0; i--){
//     right[i] = Math.max(right[i+1], arr[i]);

// }

// let ans = 0;

// for(let i=0; i<n; i++){
//     ans += Math.min(left[i], right[i]) - arr[i];
// }

// console.log(ans);

// time complexity - O(n)
// space complexity - O(n)

//=======================================

// two pointer approach

let arr = [4, 2, 0, 3, 2, 5];
// let arr = [0,1,0,2,1,0,1,3,2,1,2,1];

let n = arr.length;

let left = 0;
let right = n - 1;
let ans = 0;

let leftMax = 0;
let rightMax = 0;

while (left <= right) {
  leftMax = Math.max(leftMax, arr[left]);
  rightMax = Math.max(rightMax, arr[right]);
  if (leftMax < rightMax) {
    ans += leftMax - arr[left];
    left++;
  } else {
    ans += rightMax - arr[right];
    right--;
  }
}

console.log(ans);

// time complexity - O(n)
// space complexity - O(1)