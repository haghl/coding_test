var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();
const moum = ["a", "e", "i", "o", "u"];

input.forEach((x) => {
  let cnt = 0;
  x.split("").forEach((y) => {
    if (moum.includes(y.toLocaleLowerCase())) {
      cnt++;
    }
  });
  console.log(cnt);
});
