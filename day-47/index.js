// let arr = [0, 1, 0, 3, 12];

// let i = 0;
// let j = arr.length - 1;
// while (i <= j) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j--;
//   } else {
//     i++;
//   }
// }

// console.log(arr);

// ===================================


let arr = [0, 1, 0, 3, 12];

let i = 0;
let j = i+1;

while(j < arr.length){
    if(arr[i] == 0 && arr[j] !== 0){
        arr[i] = arr[j];
        arr[j] = 0;
        i++;
        j++;
    }
    else if(arr[i] == 0 && arr[j] == 0){
        j++;
    }
    else{
        i++;
        j++;
    }
}

console.log(arr);

