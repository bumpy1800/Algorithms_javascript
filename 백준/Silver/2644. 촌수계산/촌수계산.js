const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [[n],[START,GOAL],[m], ...graph] = input
let visited = Array(n + 1).fill(false);
let list = [...Array(n + 1)].map(() => []);

// 양방향 그래프 만들기
graph.map(([from, to]) => {
  list[from].push(to);
  list[to].push(from);
});

// DFS
const dfs = (start, target) => {
  // stack 초기값 설정
  let stack = [[start, 0]];

  // 방문 처리
  visited[start] = true;

  while (stack.length) {
    const [curNum, depth] = stack.pop();

    if (curNum === target) return depth;

    for (const node of list[curNum]) {
      if (!visited[node]) {
        visited[node] = true;
        stack.push([node, depth + 1]);
      }
    }
  }
  return -1;
};

console.log(dfs(START, GOAL));