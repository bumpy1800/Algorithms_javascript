const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' '));

const n = input[0][0];
const m = input[0][1];

let leaf = 0;
let last_leaf = 0

if(m==2){
  leaf = 1;
}

for(let i = 1; i<n;i++){
  if(m>leaf){
    console.log(0, i);
    leaf++;
  }else{
    console.log(last_leaf, i);
  }
  last_leaf = i;
}