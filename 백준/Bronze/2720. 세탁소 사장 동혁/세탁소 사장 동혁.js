const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n").map(Number);
  //.map((el) => el.split(" ").map(Number));

input.shift()
const coinArray = [25,10,5,1]
for(let c of input){
  const answer = []  
  for(let coin of coinArray){
      answer.push(Math.floor(c/coin))
      c = c%coin
  }
  console.log(answer.join(' '))
}