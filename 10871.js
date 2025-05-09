var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input.slice(1)[0].split(" ").map(Number);

const a = arr.filter((x) => X > x);
console.log(a.join(" "));
