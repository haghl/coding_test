var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input;

let i = 1;
for (i; i < N; i *= 2) {
  if (N <= 1) break;
}

console.log(N * 2 - i);
