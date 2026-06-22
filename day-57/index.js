// merge sort is a divide and conquer algorithm that splits an array into halves, recursively sorts each half, and then merges the sorted halves back together. It has a time complexity of O(n log n) and is stable, making it a popular choice for sorting large datasets.

//.....10,2,5,11,4,9,1,7,12....

// 1. divide the array into halves
// 2. sort each half recursively
// 3. merge the sorted halves

// conquer says that i've two sorted arrays, and i merge them together
// we will make two partitions of the array and sort them, and then we will merge them together

// p1 = 2,4,5,10,11
// p2 = 1, 7, 9, 12

//this below is the merge function that takes two sorted arrays and merges them into one sorted array
// .....1, 2, 4, 5, 7, 9, 10, 11, 12.....

// for this we create a new array with length of p1.length + p2.length

// then we create two pointers for p1 and p2

// then we compare the elements of p1 and p2 and add the smaller element to the new array

// then we increment the pointer of the array that has the smaller element

// then we repeat the process until we have merged all the elements of p1 and p2 into the new array

// now we will put all the items inside of the newly created array to the original array

// then we will return the original array

//==============================
// now lets divide it

// let arr = [10, 1, 5, 3,9,12];
// let mid = Math.floor(arr.length / 2);

// let p1 = arr.slice(0, mid+1);
// let p2 = arr.slice(mid+1, arr.length);

// so
// p1 = [10, 1, 5];
// p2 = [3, 9, 12];

// now, we will divide p1 and p2 recursively until we have single element arrays

// p1 after divide = [[10, 1], [5]];
// p2 after divide = [[3, 9], [12]];

// here, in p1, we will divide [10, 1] into [10] and [1]
// now we will create two pertitions of the array and sort them, and then we will merge them together, sorting will be done by comparing 10 and 1, and adding the smaller element to the new array, which will be [1, 10]

// now we will put [1,10] in actual space, so , p1 = [[1, 10], [5]];
// now we will merge [1, 10] and [5] into a new array, which will be [1, 5, 10]

// now we will put [1, 5, 10] in actual space, so , p1 = [[1, 5, 10]];

// now we will do the same for p2, and we will get p2 = [[3, 9, 12]];

// now we will merge p1 and p2 into a new array, which will be [1, 3, 5, 9, 10, 12]

// now we will put [1, 3, 5, 9, 10, 12] in actual space, so , arr = [1, 3, 5, 9, 10, 12];

function merge(arr, first, last, mid) {
  let temp = new Array(last - first + 1); // this will have the length of the original array

  let i = first;
  let j = mid + 1;
  let k = 0; // k is being used as the index for the temporary array (temp), not for the original array (arr).

  while (i <= mid && j <= last) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      i++;
      k++;
    } else {
      temp[k] = arr[j];
      j++;
      k++;
    }
  }

  while (i <= mid) {
    temp[k] = arr[i];
    i++;
    k++;
  }

  while (j <= last) {
    temp[k] = arr[j];
    j++;
    k++;
  }

  i = first;
  k = 0;
  while (k < temp.length) {
    arr[i] = temp[k];
    i++;
    k++;
  }
}

function divide(arr, first, last) {
  if (first >= last) return;

  let mid = Math.floor((first + last) / 2);
  divide(arr, first, mid);
  divide(arr, mid + 1, last);
  console.log(arr);
  merge(arr, first, last, mid);
}

// let arr = [10, 1, 5, 3,14, 9,6, 12];
let arr = [10, 1, 5, 3, 9, 12];
divide(arr, 0, arr.length - 1);
console.log(arr);
