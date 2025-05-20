var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

let dp = [0];
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

//4부터 N까지 순회하면서 dp할당
for (let i = 4; i <= N; i++) {
  let a = dp[i - 1] + 1; // 3
  let b = i % 2 === 0 ? dp[i / 2] + 1 : null; // null 4
  let c = i % 3 === 0 ? dp[i / 3] + 1 : null; // null
  //2의 배수가 아니거나 3의 배수가 아니면 최솟값 구하는 연산에서 2, 3관련은 제외
  let arr = [a, b, c].filter((v) => v !== null); // 3
  //최솟값 구하기
  let min = Math.min(...arr);
  //최솟값을 할당
  dp[i] = min; // 4=2 5=3 6=2 7=2 8=3 9=2 10=3
}

console.log(dp[N]);
