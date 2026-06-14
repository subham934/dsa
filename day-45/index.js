let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

let i = 0;
let j = 1;

while (i < arr.length - 1) {
  if (arr[i] !== arr[i+1]) {
    arr[j] = arr[i+1];
    j++;
  }
  i++;
}

console.log(arr);



