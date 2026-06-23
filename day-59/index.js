// cyclic sort:: it is an algorithm that can be used to sort an array of numbers that contain numbers from 0 to n-1, where n is the length of the array.

let arr = [4, 5, 2, 7, 8, 6, 3, 1];

function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] != arr[correct]) {
      let temp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = temp;
    } else {
      i++;
    }
  }
  return arr;
}

console.log(cyclicSort(arr));

// complexity: O(n)

function missingNumber(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    while (arr[i] < len && arr[i] !== arr[arr[i]]) {
      let correct = arr[i];

      [arr[i], arr[correct]] = [arr[correct], arr[i]];
    }
  }

  for (let i = 0; i < len; i++) {
    if (arr[i] !== i) {
      return i;
    }
  }

  return len;
}

console.log(missingNumber([0, 2, 3]));
//==============================


// multiple missing numbers

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]



let nums = [4,3,2,7,8,2,3,1]

function multipleMissingNums(nums){
    let len = nums.length;
    let result = [];

    for(let i = 0; i < len; i++){
        while(nums[i] <= len && nums[i] !== nums[nums[i] - 1]){
            let correct = nums[i] - 1;
            [nums[i], nums[correct]] = [nums[correct], nums[i]];
        }
    }

    for(let i = 0; i < len; i++){
        if(nums[i] !== i + 1){
            result.push(i + 1);
        }
    }
    return result;
}

console.log(multipleMissingNums(nums));

//=====================================


// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.




function firstMissingPositive(nums){
  let len = nums.length;
  let i = 0;

  while(i < len){
    let correct = nums[i] - 1;
    if(nums[i] > 0 && nums[i] <= len && nums[i] !== nums[correct]){
      let temp = nums[i];
      nums[i] = nums[correct];
      nums[correct] = temp;
    }else{
      i++;
    }
  }

  for(let i = 0; i < len; i++){
    if(nums[i] !== i + 1){
      return i + 1;
    }
  }
  return len + 1;
  }

  console.log(firstMissingPositive([3,4,-1,1]));
  console.log(firstMissingPositive([10,11,12,13]));