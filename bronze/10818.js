var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input[1].split(" ").map(Number);
const min = Math.min(...list);
const max = Math.max(...list);

console.log(`${min} ${max}`);
