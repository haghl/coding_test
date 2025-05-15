var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.slice(1);

list.forEach((s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const el = s.charAt(i);
    // console.log(el);

    if (el === "(") {
      stack.push(el);
    } else {
      if (stack.length <= 0) {
        console.log("NO");
        return;
      }
      stack.pop();
    }
  }
  console.log(stack.length > 0 ? "NO" : "YES");
});
