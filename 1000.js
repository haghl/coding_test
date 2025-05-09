var fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const arr = [];
for (let i = 0; i < input.length; i++) {
  const num = input[i].split(" ").map(Number);
  if (num[0] > 0 && num[1] < 10) arr.push(num[0] + num[1]);
}

console.log(arr.join("\n"));
