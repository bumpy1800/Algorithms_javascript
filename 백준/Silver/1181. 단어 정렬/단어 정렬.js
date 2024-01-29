const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');
    //.map((el) => el.split(' '));

input.shift(); // 갯수값 제거
// set으로 중복 제거한걸 다시 배열로 변경 후 사전순 -> 길이순으로 정렬
const result = Array.from(new Set(input)).sort().sort((a,b)=>a.length-b.length);

for(let row of result){
    console.log(row)
}