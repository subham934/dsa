// Quick Sort: pivot and partition

// 10, 5, 8, 2, 11, 9, 12, 6, 7

// consider 7 as pivot: compare each element with pivot and place it in left or right side of pivot

// 10, 5, 8, 2, 11, 9, 12, 6, 7
//         7
//5, 2, 6    10,8, 11, 9, 12
//      6           12
// 5,2       10,8, 11, 9
//    2        9
// 2, 5      8, 10, 11

// 2, 5, 6 , 7, 8, 9, 10, 11, 12

// ================================

function findPartition(arr, first, last){
    let i = first - 1;
    let j = first;
    let pivot = arr[last];
    
    while(j < last){
        if(arr[j] <= pivot){
            i++;
            swap(arr, i , j)
        }
        j++;
    }
    i++;
    swap(arr, i, last);
    return i;
}

// [9, 8, 1, 10, 4, 78, 23, 45, 67, 34]

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, first, last){
    if(first >= last) return;
    
    let pIdx = findPartition(arr, first, last);
    quickSort(arr, first, pIdx - 1);
    quickSort(arr, pIdx + 1, last);
}

let arr = [9, 8, 1, 10, 4, 78, 23, 45, 67, 34];
quickSort(arr, 0, arr.length - 1);
console.log(arr);




// ================================
// function quickSort(arr, left, right) {
//     if (left < right) {
//         let pivot = partition(arr, left, right);
//         quickSort(arr, left, pivot - 1);
//         quickSort(arr, pivot + 1, right);
//     }
//     return arr;
// }

// function partition(arr, left, right) {
//     let pivot = arr[right];
//     let i = left - 1;
//     for (let j = left; j < right; j++) {
//         if (arr[j] < pivot) {
//             i++;
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//     let temp = arr[i + 1];
//     arr[i + 1] = arr[right];
//     arr[right] = temp;
//     return i + 1;
// }

// let arr = [9, 8, 1, 10, 4, 78, 23, 45, 67, 34];
// console.log(quickSort(arr, 0, arr.length - 1));


// quickSort is for space complexity
// mergeSort is for time complexity

