const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const [h,w] = input.shift().map(Number)
const map = input.map((el)=>String(el).split(''))
let result = 0
const dx = [-1,1,0,0]
const dy = [0,0,-1,1]
let visit = new Array(26).fill(false);
const dfs = (x,y,acc)=>{
  let nx,ny
  result = Math.max(result, acc)
  Array(4).fill(1).some((v,idx)=>{
    nx = x+dx[idx]
    ny = y+dy[idx]
  
    if(nx >= 0 && ny >= 0 && nx < w && ny < h){
      if(!visit[map[ny][nx].charCodeAt() - 65]){
        visit[map[ny][nx].charCodeAt() - 65] = true
        dfs(nx,ny,acc+1)
        visit[map[ny][nx].charCodeAt() - 65] = false
      }
    }
  })
}
visit[map[0][0].charCodeAt() - 65] = true
dfs(0,0,1)

console.log(result)