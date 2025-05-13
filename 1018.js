var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const list = input.slice(1);

const makeChess = (x, y, board) => {
  let cntB;
};
