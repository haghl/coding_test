var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const N = Number(input);
const arr = Array(N)
  .fill()
  .map(() => Array(N).fill(" "));

for (let i = 0; i < N; i++) {
  for (let j = N - 1; j >= 0; j--) {
    if (N - 1 - i <= j) {
      arr[i][j] = "*";
    }
  }
}

console.log(arr.map((x) => x.join("")).join("\n"));

/*
const answer = [];

for (let i = 0; i < N; i++){
  answer.push(''.padStart(i + 1, '*').padStart(N, ' '));
}

console.log(answer.join('\n'));
*/
