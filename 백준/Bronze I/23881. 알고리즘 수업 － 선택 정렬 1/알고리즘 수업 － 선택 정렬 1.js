const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' '));

const N = input[0][0];
const K = input[0][1];

input.shift()

numberArray = input[0].map(Number);

let maxNum = 0;
let count = 0;
for(let i = 0; i < N; i++){
  maxNum = 0;
  for(let j = 0; j < N-i; j++){
    if(numberArray[maxNum] < numberArray[j]){
      maxNum = j;
    }
  }
  if(numberArray[N-i-1] != numberArray[maxNum]){
    [numberArray[maxNum], numberArray[N-i-1]] = [numberArray[N-i-1], numberArray[maxNum]]
    count++
  }
  if(K==count){
    console.log(numberArray[maxNum], numberArray[N-i-1])
    break;
  }
}
if(K>count){
  console.log(-1)
}