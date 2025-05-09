var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("");

const l = "SciComLove";
const arr = l.split("").filter((x, index) => x !== input[index]);
console.log(arr.length);
