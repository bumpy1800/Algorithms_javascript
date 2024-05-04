const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [[n],[...tree],[...grow]] = input;
let result = 0;
const treeGrow = tree.map((v,idx)=>{
  return [tree[idx], grow[idx]]
}).sort((a,b)=>a[1]-b[1])

Array(n).fill(1).forEach((v,idx)=>{
  result += treeGrow[idx][0] + treeGrow[idx][1] * idx
})

console.log(result)