var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const list = input.slice(1).map(Number);

if (N === 1) {
  console.log(list[0]);
} else if (N === 2) {
  console.log(list[0] + list[1]);
} else {
  const dp = [0];
  dp[1] = list[0]; // 첫 번째 계단의 점수
  dp[2] = list[0] + list[1]; // 두 번째 계단까지의 점수

  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(dp[i - 2] + list[i - 1], dp[i - 3] + list[i - 2] + list[i - 1]);
  }
  console.log(dp[N]);
}
