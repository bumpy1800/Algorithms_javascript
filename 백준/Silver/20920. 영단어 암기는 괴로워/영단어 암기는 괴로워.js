const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');
    //.map((el) => el.split(' '));

const NM = input[0].split(' ');
const M = NM[1];

input.shift()

const getStorage = new Map();

input.forEach((item,index)=>{
    if(item.length >= M){
        if(getStorage.get(item)){
            getStorage.set(item, getStorage.get(item)+1)
        }else{
            getStorage.set(item, 1)
        }
    }
})
const wordArray = Array.from(new Set(input.filter((item,index)=>item.length>=M)))
wordArray.sort((a,b)=>{
    if (getStorage.get(a) !== getStorage.get(b)) {
        return getStorage.get(b) - getStorage.get(a);
    }
    if (a.length !== b.length) {
        return b.length - a.length;
    }
    return a.localeCompare(b);
})

console.log(wordArray.join('\n'));