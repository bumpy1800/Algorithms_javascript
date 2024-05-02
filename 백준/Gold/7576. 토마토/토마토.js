const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  //.map((el) => el.split("").map(Number));
const [m,n] = input.shift().split(' ').map(Number)
const tomatoBoard = input.map((el) => el.split(" ").map(Number));

const bx = [-1,1,0,0]
const by = [0,0,-1,1]
const tomatoQueue = []
const queue = []
let noRipe = 0
let result = 0
const bfs = ()=>{
  let nx, ny
  let head = 0
  
  while(queue.length > head){
    const [current_x,current_y,count_day] = queue[head++]
    Array(4).fill(1).some((v,idx)=>{
      nx = current_x+bx[idx]
      ny = current_y+by[idx]
  
      if(nx >= 0 && ny >= 0 && nx < n && ny < m){
        if(tomatoBoard[nx][ny] === 0){
          tomatoBoard[nx][ny] = 1
          noRipe--
          queue.push([nx,ny,count_day+1])
        }
      }
    })
    result = count_day
  }
}
const solution = ()=>{
  Array(n).fill(1).some((y,y_idx)=>{
    Array(m).fill(1).some((x,x_idx)=>{
      if(tomatoBoard[y_idx][x_idx] === 1){
        tomatoQueue.push([y_idx,x_idx])
      } else if(tomatoBoard[y_idx][x_idx] === 0){
        noRipe++;
      }
    })
  })  
  tomatoQueue.forEach(([tx,ty],idx)=>{
    queue.push([tx,ty,0])
  })

  bfs()

  if(noRipe !== 0){
    result = -1
  }
  console.log(result)
}
solution()
