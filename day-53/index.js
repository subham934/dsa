// leetcode 11
// container with most water


// bRUTE FORCE

// function maxArea(height) {
//     let max_area = 0;

//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             let area = Math.min(height[i], height[j]) * (j - i);
//             max_area = Math.max(max_area, area);
//         }
//     }

//     return max_area;
// }

// // Test
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
// console.log(maxArea([1, 1]));                        // 1

//============================== Two Pointer Approach ==============================
let height = [1,8,6,2,5,4,8,3,7]
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

console.log(maxArea(height));