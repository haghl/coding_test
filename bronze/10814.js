var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input
  .slice(1)
  .map((x) => x.split(" "))
  .sort((a, b) => Number(a[0]) - Number(b[0]))
  .map((x) => x.join(" "));

console.log(list.join("\n"));
