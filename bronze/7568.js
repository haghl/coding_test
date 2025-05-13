var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.slice(1).map((v) => v.split(" ").map(Number));
const answer = Array(list.length).fill(1);
for (let i = 0; i < list.length; i++) {
  for (let j = 0; j < list.length; j++) {
    if (list[i][0] < list[j][0] && list[i][1] < list[j][1]) {
      answer[i]++;
    }
  }
}
console.log(answer.join(" "));
