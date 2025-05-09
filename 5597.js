var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = Array.from({ length: 30 }).map((_, index) => index + 1);
const list = input.map(Number);

const answer = arr.filter((x) => !list.includes(x)).sort((a, b) => a - b);

console.log(answer.join("\n"));
