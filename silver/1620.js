var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const list = input.slice(1, N + 1);
const question = input.slice(N + 1);
const book = new Map();

const result = [];
for (let i = 0; i < list.length; i++) {
  book.set(list[i], i + 1);
}

for (let q of question) {
  const n = Number(q);

  if (n) {
    result.push(list[n - 1]);
  } else {
    result.push(book.get(q));
  }
}
console.log(result.join("\n"));
