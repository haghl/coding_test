var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.slice(1);

const sort = [...new Set(list)].sort((next, current) => {
  if (next.length - current.length === 0) {
    for (let i = 0; i < current.length; i++) {
      if (next.charCodeAt(i) - current.charCodeAt(i) !== 0) {
        return next.charCodeAt(i) - current.charCodeAt(i);
      }
    }
  }

  /*
    if (next.length === current.length) {
      return next.localeCompare(current);
    }
  */

  return next.length - current.length;
});

console.log(sort.join("\n"));
