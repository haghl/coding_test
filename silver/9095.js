var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.slice(1).map(Number);

function countWays(target) {
  let count = 0;

  function dfs(sum) {
    if (sum === target) {
      count++;
      return;
    }
    if (sum > target) return;

    for (let num of [1, 2, 3]) {
      dfs(sum + num); // 완탐
    }
  }

  dfs(0);
  return count;
}
const answer = [];
for (let i = 0; i < list.length; i++) {
  const result = countWays(list[i]);
  answer.push(result);
}

console.log(answer.join("\n"));
