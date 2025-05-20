var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
let currentIndex = 1;
const testCases = [];

// 각 테스트 케이스별로 데이터 분리
for (let i = 0; i < N; i++) {
  const clothesCount = +input[currentIndex];
  const clothes = input.slice(currentIndex + 1, currentIndex + 1 + clothesCount);
  testCases.push(clothes);
  currentIndex += clothesCount + 1;
}

console.log(testCases);
