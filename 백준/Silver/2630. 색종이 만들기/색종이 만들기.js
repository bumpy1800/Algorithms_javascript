const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

const N = +input.shift()
let white = 0
let blue = 0

function divide(x,y,len){
  let count = 0
  for(let i=x; i<x+len; i++){
    for(let j=y; j<y+len; j++){
      if(input[i][j]) count++
    }
  }
  if(count == 0){
    white++
  }else if(count == len*len){
    blue++
  }else{
    let propLen = len/2
    divide(x,y,propLen)
    divide(x,y+propLen,propLen)
    divide(x+propLen,y,propLen)
    divide(x+propLen,y+propLen,propLen)
  }
}
divide(0,0,N)
console.log(white)
console.log(blue)