var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const result =
  input.map(Number).reduce((a, b) => {
    return b * b + a;
  }, 0) % 10;

console.log(result);
