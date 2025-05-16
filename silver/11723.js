var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.slice(1).map((x) => x.split(" "));
const answer = new Map();

for (let i = 0; i < list.length; i++) {
  const target = list[i];
  switch (target[0]) {
    case "add":
      answer.set(target[1], 1);
      break;
    case "remove":
      answer.set(target[1], 0);
      break;
    case "check":
      if (answer.get(target[1])) console.log(1);
      else console.log(0);
      break;
    case "toggle":
      if (answer.get(target[1])) answer.set(target[1], 0);
      else answer.set(target[1], 1);
      break;
    case "all":
      for (let j = 1; j <= 20; j++) {
        answer.set(j.toString(), 1);
      }

      break;
    case "empty":
      answer.clear();
      break;
    default:
      break;
  }
}
