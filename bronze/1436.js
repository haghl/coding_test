var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = Number(input);
const DATA = "666";
let cnt = 0;
let n = 0;

while (true) {
  n += 1;

  if (n.toString().includes(DATA)) {
    cnt++;
  }
  if (cnt === num) {
    break;
  }
}

console.log(n);
