var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const list = input.slice(1).map((x) => x.split(" ").map(Number));
const A = list.slice(0, N);
const B = list.slice(N);

const answer = A.map((x, i) => {
  return x
    .map((y, idx) => {
      return y + B[i][idx];
    })
    .join(" ");
});

console.log(answer.join("\n"));
