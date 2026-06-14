// // What is a Set?
// // => A Set is a collection of unique values — no duplicates allowed!

// const set = new Set([1, 2, 3, 3, 2]);
// console.log(set); // {1, 2, 3}  -- duplicates removed!

// // Empty set
// const set1 = new Set();

// // Set from array
// const set2 = new Set([1, 2, 3]);
// console.log(set1); // Set(0) {}
// console.log(set2); //Set(3) { 1, 2, 3 }

// // Set from string
// const set3 = new Set("hello");
// console.log(set3); // {'h', 'e', 'l', 'o'}  -- duplicate 'l' removed

// ========================================= =

// const set = new Set();

// // // ADD
// set.add(1);
// set.add(2);
// set.add(2);  // duplicate, ignored!
// console.log(set); // {1, 2}

// // // HAS (check if exists)
// console.log(set.has(1)); // true
// console.log(set.has(5)); // false

// // // set dont have index

// // // DELETE
// set.delete(1);
// console.log(set); // {2}

// // // SIZE
// console.log(set.size); // 1

// // // CLEAR (remove everything)
// set.clear();
// console.log(set); // {}

// ==========================================

// let arr = [1,2,3,1,5,2,3,8,9]
// let set = new Set();

// for(let i = 0; i<arr.length; i++){
//     set.add(arr[i])
// }
// console.log(set);
// console.log(set.size);

// ==========================================

// we can do the above process using set as below

// let arr = [1,2,3,1,5,2,3,8,9]
// let set = new Set(arr);
// console.log(set);
// console.log(set.size);

// ==========================================

// let arr = [1, 2, 3, 1, 5, 2, 3, 8, 8];

// // let map = new Map();
// // or
// let map = {};
// for (let i = 0; i < arr.length; i++) {
//   if (map[arr[i]]) {
//     map[arr[i]]++;
//   } else {
//     map[arr[i]] = 1;
//   }
// }

// for (let key in map) {
//   if (map[key] === 1) {
//     console.log(key);
//   }
// }

// ==========================================

// let arr = [1, 2, 3, 1, 5, 2, 3, 8, 8];

// let map = new Map();

// for (let i = 0; i < arr.length; i++) {
//   if (map.has(arr[i])) {
//     map.set(arr[i], map.get(arr[i]) + 1);
//   } else {
//     map.set(arr[i], 1);
//   }
// }

// for (let [key, value] of map) {
//   if (value === 1) {
//     console.log(key);
//   }
// }

// ==========================================

// let arr = [1, 2, 3, 1, 5, 2, 3, 8, 8];

// let set = new Set();
// for(let i = 0; i<arr.length; i++){
//     if(set.has(arr[i])){
//         set.delete(arr[i]);
//     }else{
//         set.add(arr[i]);
//     }
// }

// console.log(set);

// ==========================================
// q771. jewels and stones
// ==========================================

// var numJewelsInStones = function(jewels, stones) {
//   jewels = new Set(jewels);
//   // console.log(jewels); // {'a', 'A'}

//   let count = 0;
//   for(let i = 0; i<stones.length; i++){
//       if(jewels.has(stones[i])){
//           count++;
//       }
//   }

//   return count
// };

// console.log(numJewelsInStones('aA', 'aAAbbbb'));

// ==========================================
// 1832. check if the pangram or not
// ==========================================

// function checkPengram(sentence){
//     sentence = sentence.toLowerCase();
//     let set = new Set(sentence);
//     if(set.size === 26){
//         return true;
//     }else{
//         return false;
//     }

// }

// console.log(checkPengram('thequickbrownfoxjumpsoverthelazydog'));

// ==========================================
// 2351. First Letter to Appear Twice
// ==========================================

// var repeatedCharacter = function(s) {
//     let set = new Set();
//     for(let i = 0; i<s.length; i++){
//         if(set.has(s[i])){
//             return s[i];
//         }else{
//             set.add(s[i]);
//         }

//     }
// };

// ==========================================
// 202. Happy Number
// ==========================================

// function happyNumber(n) {
//   let set = new Set();

//   while (true) {
//     let sum = 0;
//     while (n > 0) {
//       let dig = n % 10;
//       sum += dig * dig;
//       n = Math.floor(n / 10);
//     }

//     if (sum === 1) {
//       return true;
//     } else if (set.has(sum)) {
//       return false;
//     } else {
//       set.add(sum);
//       n = sum;
//     }
//   }
// }

// console.log(happyNumber(7));
// console.log(happyNumber(19));
