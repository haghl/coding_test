var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[1].split(" ").map(Number);
const B = input[3].split(" ").map(Number);

const answer = new Map();

A.forEach((n) => {
  answer.set(n, (answer.get(n) ?? 0) + 1);
});

const result = B.map((x) => answer.get(x) ?? 0).join(" ");

console.log(result);
