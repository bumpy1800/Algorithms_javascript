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

// 해시테이블 생성
holdingCard.forEach((item, index)=>{
    if(hashTable[item]){
        hashTable[item] = hashTable[item]+1;
    }else{
        hashTable[item] = 1;
    }
    
})

// 해시테이블 탐색
comparseCard.forEach((item, index)=>{
    if(hashTable[item]){
        resultArray.push(hashTable[item]);
    }else{
        resultArray.push(0);
    }
})

console.log(resultArray.join(' '));