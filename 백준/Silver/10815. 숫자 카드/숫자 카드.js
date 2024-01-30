const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

const holdingCard = [...input[1]];
const comparseCard = [...input[3]];
const hashTable = [];
const resultArray = [];

holdingCard.forEach((item, index)=>{
    hashTable[item] = item;
})

comparseCard.forEach((item, index)=>{
    if(hashTable[item]){
        resultArray.push(1);
    }else{
        resultArray.push(0);
    }
})

console.log(resultArray.join(' '));