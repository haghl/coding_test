var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const list = input.slice(1);

let chessB, chessW;

const makeChess = (x, y, board) => {
  let cntB = 0;
  let cntW = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[y + i].charAt(x + j) !== chessB[i][j]) {
        cntB += 1;
      }

      if (board[y + i].charAt(x + j) !== chessW[i][j]) {
        cntW += 1;
      }
    }
  }
  return Math.min(cntB, cntW);
};

const solution = (N, M, maze) => {
  let answer = Infinity;
  chessB = Array(8)
    .fill()
    .map(() => Array(8).fill("")); // 검정 먼저 시작하는 체스판
  chessW = Array(8)
    .fill()
    .map(() => Array(8).fill("")); // 흰색 먼저 시작하는 체스판

  // 체스판 셋팅
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      chessB[i][j] = (i + j) % 2 === 0 ? "B" : "W";
      chessW[i][j] = (i + j) % 2 === 0 ? "W" : "B";
    }
  }

  // solution
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (y + 7 >= N || x + 7 >= M) continue;

      answer = Math.min(answer, makeChess(x, y, maze));
    }
  }

  console.log(answer);
};

solution(N, M, list);
