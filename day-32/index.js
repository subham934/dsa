// 🧠 What is Map() in JavaScript?

// 👉 Map is a built-in object that stores data in key → value pairs
// 👉 Similar to objects {}, but more powerful and flexible

// let map = new Map();

// map.set("name", "Subham");
// map.set(1, "number key");

// console.log(map);
// console.log(map.get("name")); // "Subham"
// console.log(map.has("name")); // true
// map.delete("name");
// map.set("ajay", 9)
// map.set("aman", 5)
// map.set("vishal", 7)
// map.set("rohit", 3)
// console.log(map);
// console.log(map.size);




// let map = new Map()

// map.set("ajay",5)
// map.set('aman',6)
// map.set('ayush',7)
// map.set('vicky',3)
// console.log(map);


// for(let key of map.keys()){
//     console.log(key);
// }

// for(let val of map.values()){
//     console.log(val);
// }

// for(let [key,val] of map.entries()){
//     console.log(key,val);
// }

// for(let key of map.keys()){
//     console.log(key + "=>" + (map.get(key)*5));
// }

// =========================================

// let arr = [1,2,3,4,2,1,3,4,1,4,5,1]

// let map = new Map();

// for(let i = 0; i<arr.length; i++){
//     if(map.has(arr[i])){
//         map.set(arr[i], (map.get(arr[i]) || 0 )+ 1);
//     }else{
//         map.set(arr[i], 1);
//     }
// }


// for(let [key, val] of map.entries()){
//     console.log(key + " => ",val);    
// }


// =========================================

// let arr = [1,2,3,4,2,1,3,4,1,4,5]

// let map = new Map()

// for(let i = 0; i<arr.length; i++){
//     map.set(arr[i], (map.get(arr[i]) || 0) + 1);
// }

// console.log(map);
// =========================================


// let arr = [2, 11, 15, 7]
// let target = 9;

// let map = new Map();
// for(let i = 0; i<arr.length; i++){
//     if(map.has(target - arr[i])){
//         console.log(map.get(target - arr[i]), i);
//     }else{
//         map.set(arr[i], i);
//     }
// }



// =========================================

// let arr = [2, 11, 15, 7, 7]

// let map = new Map()

// for(let i = 0; i<arr.length; i++){
//     if(map.has(arr[i])){
//         map.set(arr[i], map.get(arr[i]) + 1);
//     }else{
//         map.set(arr[i], 1);
//     }
// }
// let sum = 0;
// for(let key of map.keys()){
//     if(map.get(key) === 1){
//         sum += key;
//     }    
// }

// console.log(sum);
