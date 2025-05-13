var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.slice(1).map((x) => x.split(" ").map(Number));
const sort = list
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  })
  .map((x) => x.join(" "));

console.log(sort.join("\n"));
