const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n,dataArray] = input
const result = []
let head = 0
let tail = +n-1
let sum = 0
let currentResult = Number.MAX_SAFE_INTEGER
let currentA = 0
let currentB = 0
dataArray.sort((a,b)=>a-b)

while(head<tail){
  sum = dataArray[head] + dataArray[tail]
  if(Math.abs(sum) < currentResult){
    currentResult = Math.abs(sum)
    currentA = dataArray[head]
    currentB = dataArray[tail]
  }
  if(sum === 0) break;
  else if(sum<0) head++
  else if(sum>0) tail--
}
result.push(currentA,currentB)
console.log(result.join(' '))