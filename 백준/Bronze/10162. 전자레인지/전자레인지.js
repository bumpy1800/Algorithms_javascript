const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n").map(Number);
  //.map((el) => el.split(" ").map(Number));



const timeArray = [300,60,10]
const answer = []  
for(let time of timeArray){
    answer.push(Math.floor(input[0]/time))
    input[0] = input[0]%time
}
if(input[0] === 0){
  console.log(answer.join(' '))
}else{
  console.log(-1)
}
