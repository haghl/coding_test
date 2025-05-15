var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const A = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);

// const B = input[3].split(" ").map(Number);

// function binarySearch(arr, target) {
//   let left = 0,
//     right = arr.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return 1;
//     else if (arr[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }
//   return 0;
// }

// console.log(A);

const A = new Set(input[1].split(" ").map(Number));
const B = input[3].split(" ").map(Number);

const result = B.map((x) => (A.has(x) ? 1 : 0));
console.log(result.join("\n"));
