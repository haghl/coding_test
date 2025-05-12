var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const list = input.map(Number);
const max = Math.max(...list);

console.log(`${max}\n${list.findIndex((x) => x === max) + 1}`);
