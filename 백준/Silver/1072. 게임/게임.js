const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [[X,Y]] = input

let tail = 0
let head = Number.MAX_SAFE_INTEGER
let Z = getPersent(X,Y)

if(Z >= 99){
  console.log(-1)
}else{
  console.log(binarySarch(tail, head, Z))
}

function binarySarch(tail, head, target){
  let mid = 0
  let answer = -1
  while(tail <= head){ 
    mid = Math.floor((tail+head)/2)
  
    if(getPersent(X+mid,Y+mid) != target){
      answer = mid
      head = mid - 1
    }else{
      tail = mid + 1
    }
  }
  return answer
}

function getPersent(X,Y){
  return Math.floor(Y*100/X)
}