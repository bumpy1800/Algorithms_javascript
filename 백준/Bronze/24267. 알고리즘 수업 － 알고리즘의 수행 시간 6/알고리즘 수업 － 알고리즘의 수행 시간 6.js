const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim(); //.split('\n').map((el) => el.split(' ').map(Number));;
/*
function menOfPassion(n) {
    let count = 0;
    for (let i = 1; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            for (let k = j + 1; k <= n; k++) {
                console.log(`i: ${i} || j: ${j} || k: ${k} || count: ${count}`);
                count++;
            }
        }
    }
    return count;
}
*/
let num = (BigInt(input - 2) * BigInt(input - 1) * BigInt(input)) / BigInt(6);

console.log(`${num}`);
console.log('3');
