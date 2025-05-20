var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const list = input.slice(1, N + 1).map((x) => x.split(" "));

let hash = new Map();
for (let pw of list) {
  hash.set(pw[0], pw[1]);
}

const result = input.slice(N + 1).map((x) => hash.get(x));

console.log(result.join("\n"));
