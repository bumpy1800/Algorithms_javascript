const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

const [H,W] = input.shift()

const dx = [-1,0,1,0]
const dy = [0,-1,0,1]
const queue = []
let total = 0
let turn = 0

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if(input[i][j] == 1){
      total++
    }
  }
}

while(1){
  queue.push([0,0])
  let tempTotal = total
  let visit = new Array(H).fill(false).map(()=>new Array(W).fill(false))
  while (queue.length) {
    let [x,y] = queue.pop()
    for (let i = 0; i < 4; i++) {
      let tx = x + dx[i]
      let ty = y + dy[i]

      if(tx>=0 && tx<W && ty>=0 && ty<H){
        if(input[ty][tx] == 0 && visit[ty][tx] == false){
          visit[ty][tx] = true
          queue.push([tx,ty])
        }else if(input[ty][tx] == 1){
          input[ty][tx] = 2
          total--
        }
      }
    }  
  }
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if(input[i][j] == 2){
        input[i][j] = 0
      }
    }
  }
  turn++
  
  if(total == 0){
    console.log(turn)
    console.log(tempTotal)
    break
  }
}