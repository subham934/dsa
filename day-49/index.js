// leetcode - 169
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// boyer-moore voting algorithm


let arr = [2,2,1,1,1,2,2]

let count = 0;
let candidate = 0;

for (let i = 0; i < arr.length; i++) {
  if (count == 0) {
    candidate = arr[i];
  }
  if (arr[i] == candidate) {
    count++;
  } else {
    count--;
  }
}

console.log(candidate);