const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');
    //.map((el) => el.split(' '));

console.log(`${input.reduce((acc, value)=>acc+(+value),0)/input.length}\n${input.sort((a,b)=>a-b)[2]}`);