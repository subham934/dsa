// class Solution {
//   distributeCandies(n, k, candies) {
//     // Step 1: Store frequency of each candy
//     const map = new Map();

//     for (let i = 0; i < n; i++) {
//       if (map.has(candies[i])) {
//         map.set(candies[i], map.get(candies[i]) + 1);
//       } else {
//         map.set(candies[i], 1);
//       }
//     }

//     let children = 0;

//     // Step 2: Keep making groups of k distinct candies
//     while (true) {
//       let distinct = 0;

//       // Traverse all candy types
//       for (let [candy, count] of map) {
//         // If candy still available
//         if (count > 0) {
//           // Use one candy
//           map.set(candy, count - 1);

//           distinct++;
//         }

//         // Got k distinct candies
//         if (distinct === k) {
//           break;
//         }
//       }

//       // Could not make a full group
//       if (distinct < k) {
//         break;
//       }

//       // One child satisfied
//       children++;
//     }

//     return children;
//   }
// }

// module.exports = Solution;

// =============================

// function kthDistinct(arr, k) {
//   // Implement your code here

//   const map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       map.set(arr[i], map.get(arr[i]) + 1);
//     } else {
//       map.set(arr[i], 1);
//     }
//   }

//   let arr2 = [];

//   for (let key of map.keys()) {
//     if (map.get(key) === 1) {
//       arr2.push(key);
//     }
//   }

//   if(arr2.length < k){
//     return "None"
//   }
//   return arr2[k - 1];
// }

// console.log(kthDistinct(["a", "b", "c", "d", "a", "b", "e"], 2));

//===============================

// function wordPattern(pattern, s) {

//   let arr = s.split(" ");

//   // Length must match
//   if (pattern.length !== arr.length) {
//     return false;
//   }

//   // character -> word
//   let charMap = new Map();

//   // word -> character
//   let wordMap = new Map();

//   for (let i = 0; i < pattern.length; i++) {

//     let ch = pattern[i];
//     let word = arr[i];

//     // If character already mapped
//     if (charMap.has(ch)) {

//       // Check if mapping matches
//       if (charMap.get(ch) !== word) {
//         return false;
//       }

//     } else {

//       charMap.set(ch, word);

//     }

//     // Reverse checking
//     // If word already mapped
//     if (wordMap.has(word)) {

//       // Check if mapped character matches
//       if (wordMap.get(word) !== ch) {
//         return false;
//       }

//     } else {

//       wordMap.set(word, ch);

//     }
//   }

//   return true;
// }

// console.log(wordPattern("abba", "dog cat cat dog"));   // true
// console.log(wordPattern("abba", "dog cat cat fish"));  // false
// console.log(wordPattern("ab", "word word"));           // false

//=====================
function findErrorNums(nums) {
  let n = nums.length;

  let freq = new Map();

  for (let i = 0; i < n; i++) {
    if (freq.has(nums[i])) {
      freq.set(nums[i], freq.get(nums[i]) + 1);
    } else {
      freq.set(nums[i], 1);
    }
  }

  let double;
  let miss;

  for (let i = 1; i <= n; i++) {   // ✅ i <= n (pehle i < n tha — BUG)
    if (freq.get(i) === 2) {
      double = i;
    } else if (freq.get(i) === undefined) {
      miss = i;
    }
  }

  return [double, miss];
}

// Test cases
console.log(findErrorNums([1, 2, 2, 4]));  // [2, 3]
console.log(findErrorNums([2, 2]));         // [2, 1]