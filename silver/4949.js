var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.slice(0, input.length - 1).forEach((s) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === "(") {
      stack.push(char);
    }

    if (char === "[") {
      stack.push(char);
    }

    if (char === ")") {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        console.log("no");
        return;
      }
    }

    if (char === "]") {
      if (stack.length > 0 && stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        console.log("no");
        return;
      }
    }
  }

  console.log(stack.length === 0 ? "yes" : "no");
});
