const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.shift();

let acc = 0
let result = 0
for(let time of input[0].sort((a,b)=>a-b)){
  acc = acc+time
  result += acc
}
console.log(result)