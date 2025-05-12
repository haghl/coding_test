var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const time = (input[0] === 0 ? 24 : input[0]) * 60 + input[1] - 45;
const H = Math.floor(time / 60);
const m = time % 60;

console.log(`${H === 24 ? 0 : H} ${m}`);
