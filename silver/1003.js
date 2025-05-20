var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.slice(1).map(Number);

const fibonacci = (n) => {
  if (n === 0) {
    return "1 0";
  } else if (n === 1) {
    return "0 1";
  }

  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return `${dp[dp.length - 2]} ${dp[dp.length - 1]}`;
};

let answer = [];
for (let x of list) {
  const re = fibonacci(x);
  answer.push(re);
}

console.log(answer.join("\n"));
