// let replaceElements = (arr) => {
//   if (arr.length === 0) return [];

//   for (let i = 0; i < arr.length; i++) {
//     let maxRight = -1;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] > maxRight) {
//             maxRight = arr[j];
//         }
//     }
//     arr[i] = maxRight;
// }
// return arr;
// };

// console.log(replaceElements([17, 18, 5, 4, 6, 1]));

let replaceElements = (arr) => {
  // Edge case: Agar array khaali hai
  if (arr.length === 0) return [];

  let maxRight = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentElement = arr[i];

    arr[i] = maxRight;

    if (currentElement > maxRight) {
      maxRight = currentElement;
    }
  }

  return arr;
};

console.log(replaceElements([17, 18, 5, 5, 6, 1]));
// Output: [18, 6, 6, 6, 1, -1]

// ==================================
function moveZerosToEnd(arr) {
  // Write your logic here
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j--;
    } else {
      i++;
    }
  }

  return arr;
}

module.exports = { moveZerosToEnd };
// ==================================



function sortArrayByParity(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (arr[i] % 2 === 0) {
            i++;
        } else if (arr[j] % 2 === 1) {
            j--;
        } else {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return arr;
}

console.log(sortArrayByParity([3,1,2,4]))







// ==================================

let runningSum = (nums) => {
  let sum = 0;
  let result = [];

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      result.push(sum);
    }

    return result;
};

console.log(runningSum([1, 2, 3, 4])); // Output: [1, 3, 6, 10]

// ==================================
let nums = [1,1,1,1,1,1,6];
let pivotIndex = (nums)=>{
    let sum = 0;
    for(let i = 0; i<nums.length; i++){
        sum += nums[i];
    }

    let leftSum = 0;
    for(let i = 0; i<nums.length; i++){
        if(leftSum === sum - leftSum - nums[i]){
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}

console.log(pivotIndex(nums))

// ==================================

function productExceptSelf(nums) {
    // implement here
    let result = [];

    for(let i = 0; i < nums.length; i++){
        let product = 1;
        for(let j = 0; j < nums.length; j++){
            if(i !== j){
                product *= nums[j];
            }
        }
        result.push(product);
    }
    return result;
}
console.log(productExceptSelf([1,2,3,4,5]))
// ==================================

function productExceptSelfOptimized(nums) {
    // implement here
    let n = nums.length;
    let result = new Array(n).fill(1); 
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}

console.log(productExceptSelfOptimized([1,2,3,4,5]))

// ==================================


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let result = new Array(n).fill(1); 
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
};
// ==================================
