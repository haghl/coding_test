var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input; // 18

function greedyChange() {
  let fivCnt = 0;
  let thrCnt = 0;
  let i = N;

  while (i > 0) {
    if (i < 3 || i == 4) {
      fivCnt = -1;
      break;
    } else {
      if (i % 3 === 0 && i < 15) {
        i -= 3;
        thrCnt++;
      } else {
        i -= 5;
        fivCnt++;
      }
    }
  }

  return fivCnt + thrCnt;
}

const result = greedyChange();

console.log(result);
