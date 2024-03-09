const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let goalMoney = input[0][1]

input.shift()

const coinArray = input.map(Number)
let count = 0;
coinArray.sort((a,b)=>b-a).forEach((value)=>{
  if(goalMoney >= value){
    count += Math.floor(goalMoney/value)
    goalMoney = Math.floor(goalMoney%value)
  }
})
console.log(count)