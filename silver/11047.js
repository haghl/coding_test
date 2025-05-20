var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const coins = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);
let count = 0;
let money = M;

for (let coin of coins) {
  let use = Math.floor(money / coin);
  count += use;
  money %= coin;
}

console.log(count);
