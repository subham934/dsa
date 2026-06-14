// => Merge Sorted Arrays

// let arr1 = [2, 4, 8, 10];
// let arr2 = [1, 3, 5, 6, 9];

// let sorted = []

// function mergeSort(arr1, arr2) {
//   let i = 0;
//   let j = 0;

//   while(i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//       sorted.push(arr1[i])
//       i++
//     }else{
//       sorted.push(arr2[j])
//       j++
//     }
//   }

//   while(i < arr1.length){
//     sorted.push(arr1[i])
//     i++
//   }

//   while(j < arr2.length){
//     sorted.push(arr2[j])
//     j++
//   }

//   return sorted;
// }

// console.log(mergeSort(arr1, arr2));

//===================================

// let arr1 = [2,4,7,9, 45];
// let arr2 = [1,3,5,8,10, 11, 50];

// let temp = new Array(arr1.length + arr2.length);

// let i = 0;
// let j = 0;
// let k = 0;

// while(i<arr1.length && j<arr2.length){
//  if(arr1[i] < arr2[j]){
//   temp[k] = arr1[i]
//   i++
//  }else{
//   temp[k] = arr2[j]
//   j++
//  }
//  k++
// }

// while(i<arr1.length){
//   temp[k] = arr1[i]
//   i++
//   k++
// }

// while(j<arr2.length){
//   temp[k] = arr2[j]
//   j++
//   k++
// }

// console.log(temp);

//===============================

let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];
let m = 3;
let n = 3;
let i = m - 1;
let j = n - 1;
let k = arr1.length - 1;

while (i >= 0 && j >= 0) {
  if (arr1[i] > arr2[j]) {
    arr1[k] = arr1[i];
    i--;
  } else {
    arr1[k] = arr2[j];
    j--;
  }
  k--;
}

while (j >= 0) {
  arr1[k] = arr2[j];
  j--;
  k--;
}

console.log(arr1);
