const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

let result = []
for(let i = 1; i < input.length; i+=2){
  let woodHeight = input[i+1].sort((a,b)=>a-b)
  let woodLength = input[i]
  let answer = 0
  for(let j = 2; j < woodLength; j++){
    answer = Math.max(answer, Math.abs(woodHeight[j]-woodHeight[j-2]))
  }
  result.push(answer)
}
console.log(result.join('\n'))