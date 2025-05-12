var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const result = input[1]
  .split("")
  .map(Number)
  .reduce((a, b) => a + b, 0);

console.log(result);
