const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(BigInt));

input.shift()

const road = input.shift().map(BigInt)
const price = input.shift().map(BigInt)

let answer = BigInt(0)
let is_finish = false;
for (let i = 0; i < price.length-1; i++) {
  for (let j = i; j < road.length; j++) {
    answer += price[i] * road[j]
    if(price[i] >= price[i+1]){
      break;
    }
    is_finish = true;
  }
  if(is_finish) break
}

console.log(answer.toString())