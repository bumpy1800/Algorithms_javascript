const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n').map(Number);
    //.map((el) => el.split(' '));

input.shift()
let temp = 0;
//let count = 0;
for(let i=input.length-1;i>0;i--){
  for(let j=0;j<i;j++){
    if(input[j] > input[j+1]){
      temp = input[j]
      input[j] = input[j+1]
      input[j+1] = temp
      //[input[j], input[j+1]] = [input[j+1], input[j]]
    }
    //count++;
  }
}
console.log(input.join('\n'))
//console.log(count);