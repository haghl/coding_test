var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const list = input[1].split(" ").map(Number);
const v = Number(input[2]);

const filter = list.filter((x) => x === v);
console.log(filter.length);
