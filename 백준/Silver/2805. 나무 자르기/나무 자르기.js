const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const goalHeight = input.shift()[1];

let treeArray = input.flatMap((e)=>e).sort((a,b)=>a-b)
let head = treeArray[treeArray.length-1]
let tail = 0
let maxHeight = 0

while(tail <= head){
  let mid = Math.floor((tail + head)/2)
  let sum = 0  

  treeArray.forEach((el)=>{
    if((el - mid) > 0){
      sum += el - mid
    }
  })
  if(sum >= goalHeight){
          if(mid > maxHeight){
      maxHeight = mid
    }
    tail = mid+1
  }else if(sum < goalHeight){
    head = mid-1
  }else{

  }
}

console.log(maxHeight)