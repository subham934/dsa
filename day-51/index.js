// leetcode-75
// sort colors
//Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

//dutch national flag algorithm

// let nums = [2,0,2,1,1,0]

// // use three pointers

// let low = 0;
// let mid = 0;
// let high = nums.length - 1;

// while(mid <= high){
//     if(nums[mid] == 0){
//         [nums[low], nums[mid]] = [nums[mid], nums[low]];
//         low++;
//         mid++;
//     }else if(nums[mid] == 1){
//         mid++;
//     }else{
//         [nums[mid], nums[high]] = [nums[high], nums[mid]];
//         high--;
//     }
// }

// console.log(nums);

// ================================
function sortColors(nums) {
  function solve(i, j, k) {
    // BASE CASE
    if (j > k) {
      return;
    }
    // if current element is 0
    if (nums[j] == 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      solve(i + 1, j + 1, k);
    }
    // if current element is 1
    else if (nums[j] == 1) {
      solve(i, j + 1, k);
    }
    // if current element is 2
    else {
      [nums[j], nums[k]] = [nums[k], nums[j]];
      solve(i, j, k - 1);
    }
  }
  solve(0, 0, nums.length - 1);
  return nums;
}

let nums = [2, 0, 2, 1, 1, 0];

console.log(sortColors(nums));
