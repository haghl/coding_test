var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.map(Number);
const answer = list.slice(1).sort((a, b) => a - b);

console.log(answer.join("\n"));
