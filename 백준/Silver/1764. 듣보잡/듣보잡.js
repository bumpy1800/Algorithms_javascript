const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' '));

const notListenrs = Number(input[0][0]);
const notViewers = Number(input[0][1]);

input.shift()

const notListenrArray = input.slice(0,notListenrs);
const notViewerArray = input.slice(notListenrs, notViewers+notListenrs);

const getStorage = new Map();

const resultArray = [];

notListenrArray.forEach((item, index)=>{
    getStorage.set(item[0], item[0])
});

notViewerArray.forEach((item, index)=>{
    if(getStorage.get(item[0])){
        resultArray.push(item[0])
    }
});

console.log(resultArray.length);
for(let row of resultArray.sort()){
    console.log(row);
}