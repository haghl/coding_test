var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.slice(1);
const answer = [];

for (let i = 0; i < list.length; i++) {
  if (list[i] === "0") {
    answer.pop();
  } else {
    answer.push(list[i]);
  }
}
const result = answer.map(Number).reduce((a, b) => a + b, 0);
console.log(result);
