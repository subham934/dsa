// function sortHeight(names, height){

//     let map = new Map()

//     for(let i = 0; i<names.length; i++){
//         map.set(names[i], height[i])
//     }

//     return [...map.keys()].sort((a,b) => map.get(b) - map.get(a));

// }

// console.log(sortHeight(["Bob","Charlie","Alice"], [180, 165, 195]));

// ===========================================

const mostFrequent = function (arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      if (arr[i] % 2 === 0) {
        map.set(arr[i], 1);
      }
    }
  }

  let freq = 0;
  let ans = -1;
  for (let [key, value] of map) {
    if (value > freq || (value === freq && key < ans)) {
      freq = value;
      ans = key;
    }
  }

  return ans;
};

console.log(mostFrequent([0, 1, 2, 1, 4, 4, 2]));

// ===========================================
  // ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
