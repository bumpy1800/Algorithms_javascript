const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

const [N, r, c] = input[0];

const size = Math.pow(2,N)
let count = 0;

function divide(x, y, depth) {
  if (depth === 0) return;

  const innerSize = Math.floor(Math.pow(2, depth-1)/2);
  const skip = Math.pow(4, depth-1)

  // 1사분면
  if (r < x && c < y) {
    divide(x-innerSize, y-innerSize, depth-1);
  }else if(r < x && c >= y){ // 2사분면
    count += skip
    divide(x-innerSize, y+innerSize, depth-1);
  }else if(r >= x && c < y){ // 3사분면
    count += skip*2
    divide(x+innerSize, y-innerSize, depth-1);
  }else{ // 4사분면
    count += skip*3
    divide(x+innerSize, y+innerSize, depth-1);
  } 
}

divide(size/2, size/2, N);
console.log(count);