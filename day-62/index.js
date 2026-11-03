// leetcode - 349

// function intersection(nums1, nums2) {
//   let num = new Set(nums1);
//   let ans = [];

//   for (let i = 0; i < nums2.length; i++) {
//     if (num.has(nums2[i])) {
//       ans.push(nums2[i]);
//       num.delete(nums2[i]);
//     }
//   }
//   return ans;
// }

// console.log(intersection([1, 2, 2, 1], [2, 2]));

// leetcode - 560

function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);

  let currentSum = 0;
  let count = 0;

  for (const num of nums) {
    currentSum += num;

    if (map.has(currentSum - k)) {
      count += map.get(currentSum - k);
    }

    map.set(currentSum, (map.get(currentSum) || 0) + 1);
  }

  return count;
}

console.log(subarraySum([3, 4, 7, 1, 2, -3, 5, 6], 7));

// leetcode = 350

function intersect(nums1, nums2) {
  const map = new Map();
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const result = [];
  for (const num of nums2) {
    const count = map.get(num);
    if (count > 0) {
      result.push(num);
      map.set(num, count - 1);
    }
  }
  return result;
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

// Given an unsorted array arr[] of integers, find the numbers of subarrays whose sum exactly equal to a given number k.

// Brute Force
// let arr = [10, 2, -2, -20, 10];
// let k = -10;

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = i; j < arr.length; j++) {
//     sum += arr[j];
//     if (sum === k) {
//       count++;
//     }
//   }
// }
// console.log(count);

// Optimal Approach

let arr = [10, 2, -2, -20, 10];
let k = -10;

let sum = 0;
let count = 0;

let map = new Map();
map.set(0, 1);

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];

  if (map.has(sum - k)) {
    count += map.get(sum - k);
  }
  if (map.has(sum)) {
    map.set(sum, map.get(sum) + 1);
  } else {
    map.set(sum, 1);
  }
}

console.log(count);



// Given a binary array nums, find the maximum length of a contiguous subarray with an equal number of 0 and 1.

function findMaxLength(nums) {
    const map = new Map();
    map.set(0, -1); // Prefix sum 0 occurs before the array starts

    let prefixSum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        // Convert 0 to -1, keep 1 as 1
        prefixSum += nums[i] === 0 ? -1 : 1;

        if (map.has(prefixSum)) {
            maxLength = Math.max(maxLength, i - map.get(prefixSum));
        } else {
            // Store only the first occurrence
            map.set(prefixSum, i);
        }
    }

    return maxLength;
}

// Example
console.log(findMaxLength([0, 1, 0]));             // 2
console.log(findMaxLength([0, 1, 0, 1, 1, 0, 0])); // 6






/**
 * @param {number[]} nums
 * @return {number}
 * leetcode - 525
 */
function findMaxLength(nums) {
    //Write your code here
   const map = new Map();
    map.set(0, -1);

    let prefixSum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {

        prefixSum += nums[i] === 0 ? -1 : 1;

        if (map.has(prefixSum)) {
            maxLength = Math.max(maxLength, i - map.get(prefixSum));
        } else {
            map.set(prefixSum, i);
        }

    }

    return maxLength;
}

console.log(findMaxLength([0,1,0]))


// Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray with the sum of its elements is equal to the given value k. if there is no such subarray with the given sum, return 0.

function lenOfLongSubarr(arr, k) {
    const map = new Map();
    let prefixSum = 0;
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        // Case 1: Agar shuruat se lekar abhi tak ka sum hi 'k' ke barabar ho gaya
        if (prefixSum === k) {
            maxLength = i + 1;
        }

        // Case 2: Agar (prefixSum - k) pehle kabhi map me aaya tha
        if (map.has(prefixSum - k)) {
            maxLength = Math.max(maxLength, i - map.get(prefixSum - k));
        }

        // Case 3: Map me pehli baar aaya sum hi store karo (taaki longest length mile)
        if (!map.has(prefixSum)) {
            map.set(prefixSum, i);
        }
    }

    return maxLength;
}

// Testing
console.log(lenOfLongSubarr([10, 5, 2, 7, 1, 9], 15)); // Output: 4 (Subarray: [5, 2, 7, 1])
console.log(lenOfLongSubarr([-1, 2, 3], 6));           // Output: 0






function countDistinctInWindow(arr, k) {
    const map = new Map();
    const result = [];

    // Process the first window
    for (let i = 0; i < k; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    result.push(map.size);


    // Slide the window
    for (let i = k; i < arr.length; i++) {
        // 1. Remove the element that is going out of the window
        const outElement = arr[i - k];
        map.set(outElement, map.get(outElement) - 1);
        
        if (map.get(outElement) === 0) {
            map.delete(outElement);   // important: remove if frequency becomes 0
        }

        // 2. Add the new element coming into the window
        const inElement = arr[i];
        map.set(inElement, (map.get(inElement) || 0) + 1);

        // 3. Store current number of distinct elements
        result.push(map.size);
    }

    return result;
}

console.log(countDistinctInWindow([1, 2, 1, 3, 4], 3)); // [2, 3, 3]
console.log(countDistinctInWindow([1, 1, 2, 2, 3], 2)); // [1, 2, 1, 2]