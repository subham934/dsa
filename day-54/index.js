// leetcode 15 -> 3Sum

// let nums = [-1, 0, 1, 2, -1, -4];

// var threeSum = function (nums) {
//   let result = [];
//   let seen = new Set();

//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
//           let key = triplet.toString();
            
//           if (!seen.has(key)) {
//             seen.add(key);
//             result.push(triplet);
//           }
//         }
//       }
//     }
//   }
//   return result;
// };

// console.log(threeSum(nums));



// leetcode 15 -> 3Sum optimized solution

let nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function (nums) {
    let sortedNums = nums.sort((a, b) => a - b); // [-4, -1, -1, 0, 1, 2]
    let result = [];
    
    for(let i = 0; i < sortedNums.length - 2; i++) {
        // Skip duplicate anchors
        if(i !== 0 && sortedNums[i] == sortedNums[i - 1]) continue; 
        
        let j = i + 1;
        let k = sortedNums.length - 1;
        
        while(j < k) {
            let sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
            
 
            if(sum === 0) {
                result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                
                // 1. Move pointers inward first to prevent infinite loops
                j++;
                k--;
                
                // 2. The Correct Equations: Skip adjacent duplicates
                while(j < k && sortedNums[j] === sortedNums[j - 1]) j++; 
                while(j < k && sortedNums[k] === sortedNums[k + 1]) k--; 
                
            } else if(sum < 0) {
                j++; // Sum too small, look for a larger number
            } else {
                k--; // Sum too big, look for a smaller number
            }
        }
    }
    return result;
}

console.log(threeSum(nums)); 
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]