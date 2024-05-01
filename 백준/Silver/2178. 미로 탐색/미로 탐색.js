const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  //.map((el) => el.split("").map(Number));
  
const [n,m] = input.shift().split(' ').map(Number)
const miro = input.map((el) => el.split("").map(Number));

let visit = Array.from(Array(n),()=>Array(m).fill(false))
const bx = [-1,1,0,0]
const by = [0,0,-1,1]
const queue = [[0,0,1]]

const bfs = ()=>{
  let nx, ny
  while(queue.length){
    const [x,y,acc] = queue.shift()
    if(x+1===n && y+1===m){
      console.log(acc)
      return 
    } 
    Array(4).fill(1).some((v,idx)=>{
      if(idx === 4) return true
      nx = x+bx[idx]
      ny = y+by[idx]
  
      if(nx >= 0 && ny >= 0 && nx < n && ny < m){
        if(!visit[nx][ny] && miro[nx][ny] === 1){
          visit[nx][ny] = true
          queue.push([nx,ny,acc+1])
        }
      }
    })
  }
}

bfs()