var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const answer = [];
answer[0] = Number(input[0]) + Number(input[1]) - Number(input[2]);
answer[1] = Number(input[0] + input[1]) - Number(input[2]);
console.log(answer.join("\n"));
