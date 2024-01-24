const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim(); //.split('\n').map((el) => el.split(' ').map(Number));;

let num = (BigInt(input - 1) * BigInt(input)) / BigInt(2);

console.log(`${num}`);
console.log('2');
