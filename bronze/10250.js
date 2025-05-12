var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.slice(1).map((x) => x.split(" ").map(Number));

for (let item of list) {
  const [H, _, N] = item;
  const reseult = `${N % H === 0 ? H : N % H}${Math.ceil(N / H)
    .toString()
    .padStart(2, 0)}`;

  console.log(reseult);
}
