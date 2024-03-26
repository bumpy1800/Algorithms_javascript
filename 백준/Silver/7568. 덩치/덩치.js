const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.shift()

let rank = [];
input.forEach(([targetWeight,targetHeight])=>{
  let count = 0;
  input.forEach(([weight,height])=>{
    if(targetHeight < height && targetWeight < weight){
      count++;
    }
  })
  rank.push(count+1)
})
console.log(rank.join(' '))