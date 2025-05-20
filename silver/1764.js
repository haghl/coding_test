var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const noL = input.slice(1, N + 1);
const noS = input.slice(N + 1);

const hash = new Map();
const answer = [];
for (let l of noL) {
  hash.set(l, 0);
}

for (let s of noS) {
  if (hash.has(s)) {
    answer.push(s);
  }
}

console.log(`${answer.length}\n${answer.sort().join("\n")}`);
