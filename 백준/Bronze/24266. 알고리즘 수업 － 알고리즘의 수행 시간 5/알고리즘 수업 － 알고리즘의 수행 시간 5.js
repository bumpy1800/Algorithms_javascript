const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim(); //.split('\n').map((el) => el.split(' ').map(Number));;

let num = BigInt(input);

console.log(`${num * num * num}`);
console.log(3);
