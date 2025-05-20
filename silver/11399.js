var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const atms = input[1].split(" ").map(Number);

const sort = atms.sort((a, b) => a - b);
let sum = 0;
let result = 0;

for (let i = 0; i < sort.length; i++) {
  sum = sort[i] + sum;
  result += sum;
}
console.log(result);
