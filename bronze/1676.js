var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const factorial = (n) => {
  n = BigInt(n);
  if (n === 0n || n === 1n) return 1n; // BigInt 비교는 n === 0n 으로!
  const answer = n * factorial(n - 1n);
  return answer;
};

let answer = 0;
const result = factorial(input).toString().split("n")[0];
for (let i = 0; i < result.length; i++) {
  const nn = result[result.length - 1 - i];
  if (nn === "0") {
    answer++;
  } else {
    break;
  }
}

console.log(answer);

/* 
let output = 0;

for (let i = 1; i <= N; i++) {
  if (i % 5 ** 3 === 0) output += 3;
  else if (i % 5 ** 2 === 0) output += 2;
  else if (i % 5 === 0) output += 1;
}
*/
