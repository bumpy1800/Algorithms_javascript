const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

const [N, M] = input.shift()
const [T] = input.pop()

let visit = Array.from(Array(N), ()=>Array(M).fill(0))
const bx = [-1,1,0,0]
const by = [0,0,-1,1]
let count = 0

// 255,0으로 변환
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
      const r = input[i][j * 3];
      const g = input[i][j * 3 + 1];
      const b = input[i][j * 3 + 2];
      const rgb = (r + g + b) / 3;
      visit[i][j] = rgb >= T ? 255 : 0;
  }
}

const bfs = (px,py)=>{
  const queue = [[px,py]]
  visit[px][py] = 0
  while(queue.length){
    const [x,y] = queue.shift()

    Array(4).fill(1).some((v,idx)=>{
      if(idx === 4) return true
      const nx = x+bx[idx]
      const ny = y+by[idx]

      if((nx>=0 && ny>=0 && ny<M && nx<N) && visit[nx][ny] == 255){
          visit[nx][ny] = 0
          queue.push([nx,ny])
      }
    })
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
      if (visit[i][j] === 255) {
        bfs(i, j);
        count++;
      }
  }
}
console.log(count)