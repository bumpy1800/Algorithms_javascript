const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

let [N,M,x,y,K] = input[0]
let dice = [0,0,0,0,0,0] // 주사위

const map = []
for(let i=1; i<=N; i++){ // 지도
  map.push(input[i])
}

const command = input.pop() // 명령: 동1 서2 북3 남4
const directionMove = [[0,1],[0,-1],[-1,0],[1,0]]

const numCopy = (px,py)=>{
  if(map[px][py] == 0){ // 바닥이 0이면
    map[px][py] = dice[0]
  }else{ // 바닥이 0이 아니면
    dice[0] = map[px][py]
    map[px][py] = 0
  }
}
const move = (direction)=>{
  const [mx,my] = directionMove[direction-1]

  if((x+mx) < 0 || (x+mx) >= N || (y+my) < 0 || (y+my) >= M){ // 범위체크
    return
  }
  // 주사위 이동
  x+=mx
  y+=my
  diceSort(direction)
  numCopy(x,y)
  console.log(dice[5])
}
const diceSort = (direction)=>{
  const [a,b,c,d,e,f] = dice
  switch (direction) {
    case 1: // 동
      dice = [c,b,f,a,e,d]
      break;
    case 2: // 서
      dice = [d,b,a,f,e,c]
      break;
    case 3: // 북
      dice = [b,f,c,d,a,e]
      break;
    case 4: // 남
      dice = [e,a,c,d,f,b]
      break;
  }
}
command.forEach((direction)=>{
  move(direction)
})