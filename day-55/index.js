// leetcode - 56

let intervals = [[1,3],[2,6],[8,10],[15,18]];



// var merge = function(intervals) {
//     if(intervals.length <= 1) return intervals;

//     intervals.sort((a,b) => a[0] - b[0]);

//     let merged = [];
//     let start = intervals[0][0];
//     let end = intervals[0][1];

//     for(let i = 1; i<intervals.length; i++){
//         if(intervals[i][0] <= end){
//             end = Math.max(end, intervals[i][1]);
//         }else{
//             merged.push([start, end]);
//             start = intervals[i][0];
//             end = intervals[i][1];
//         }
//     }

//     merged.push([start, end]);

//     return merged;
// };

// console.log(merge(intervals));



var merge = function(intervals) {

    intervals.sort((a,b) => a[0] - b[0]);

    let merged = [];
    
    for(let i = 0; i<intervals.length; i++){
        let curr = intervals[i];
        let prev = merged[merged.length - 1];
        if(merged.length === 0 || prev[1] < curr[0]){
            merged.push(curr);
        }else{
            prev[1] = Math.max(prev[1], curr[1]);
        }
    }

    return merged;
}

console.log(merge(intervals));