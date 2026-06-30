// leetcode - 35

// function searchInsert(nums, target){
//     let start = 0;
//     let end = nums.length - 1;

//     while(start <= end){
//         let mid = Math.floor((start + end)/2);
//         if(nums[mid] == target){
//             return mid;
//         }else if(nums[mid] < target){
//             start = mid + 1;
//         }else{
//             end = mid - 1;
//         }

//     }
//         if(end < start){
//             return start;
//         }

// }

// console.log(searchInsert([1,3,5,6], 12));

//=================================
// function peakIndexInMountainArray(arr) {
//     // Write your code here
//     let len = arr.length;
//     let start = 0;
//     let end = len - 1;
//     while (start < end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] > arr[mid + 1]) {
//             end = mid;
//         } else {
//             start = mid + 1;
//         }
//     }
//     return start;
// }

// console.log(peakIndexInMountainArray([1,3,8,4,2]))

//=================================

//leetcode 34

var searchRange = function (nums, target) {
  function firstOccurrence(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ans = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        ans = mid;
        end = mid - 1;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return ans;
  }

  function lastOccurrence(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ans = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        ans = mid;
        start = mid + 1;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return ans;
  }

  return [firstOccurrence(nums, target), lastOccurrence(nums, target)];
};

console.log(searchRange([2, 7, 7, 8, 8, 9], 8));
//=================================

function searchInsert(nums, target) {
  // Write your code here
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if (end < start) {
    return start;
  }
}

console.log(searchInsert([1, 3, 5, 6], -12));

//=================================
//Advanced Binary Search
// Leetcode - 852
// function peakIndexInMountainArray(arr) {
//   // Write your code here
//     let length = arr.length;
//     let start = 0;
//     let end = length - 1;
//     while (start < end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] < arr[mid + 1]) {
//             start = mid + 1;
//         } else {
//             end = mid;
//         }
//     }
//     return start;
// }

// console.log(peakIndexInMountainArray([1, 3, 8, 4, 2]));

//=================================
// leetcode -33

// function search(nums, target){
//     for(let i = 0; i<nums.length; i++){
//         if(nums[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// -----------

// var search = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);

//         if (nums[mid] === target) {
//             return mid;
//         }

//         // Left half is sorted
//         if (nums[start] <= nums[mid]) {
//             // Target is in left sorted part
//             if (nums[start] <= target && target < nums[mid]) {
//                 end = mid - 1;
//             } else {
//                 start = mid + 1;
//             }
//         }
//         // Right half is sorted
//         else {
//             // Target is in right sorted part
//             if (nums[mid] < target && target <= nums[end]) {
//                 start = mid + 1;
//             } else {
//                 end = mid - 1;
//             }
//         }
//     }

//     return -1;
// };

// console.log(search([4,5,6,7,0,1,2], 0));

//=================================

// https://www.geeksforgeeks.org/dsa/allocate-minimum-number-pages/

function isValid(arr, upper, k) {
  let sum = 0;
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > upper) {
      sum = arr[i];
      count++;
      if (count > k) {
        return false;
      }
    }
  }
  return true;
}


function findPages(arr, k) {
  let first = -Infinity;
  let last = 0;
  let ans = -1;

  if (arr.length < k) {
    return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    first = Math.max(first, arr[i]);
    last += arr[i];
  }

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (isValid(arr, mid, k)) {
      ans = mid;
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return ans;
}

console.log(findPages([12, 34, 67, 90], 2));
//=========================================


// leetcode 875

function minEatingSpeed(piles, h) {
  
  let first = 1;
  let last = Math.max(...piles);
  let ans = 0;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / mid);
    }
    if (hours <= h) {
      ans = mid;
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return ans;

}

console.log(minEatingSpeed([3, 6, 7, 11], 8));



//1283, 410  - leetcode
// solve this also - https://www.geeksforgeeks.org/problems/aggressive-cows/1


