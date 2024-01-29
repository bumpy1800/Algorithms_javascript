const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' '));

input.shift(); // 갯수값 제거
const numArray = input[0].map(Number);
const copayArray = [...numArray];
const numObject = {}
const resultArray = []

// 중복제거 후 정렬
const sortArray = Array.from(new Set(copayArray.sort((a,b)=>a-b)))

// 오름차순으로 정렬하면 해당 index값이 곧 좌표압축값 기존배열에서 해당 값을 찾기위해 객체화
sortArray.forEach((item, index)=>{
    numObject[item] = index
})

// 기존배열의 값과 객체 속성 매칭 후 배열화
numArray.forEach((item, index)=>{
    resultArray.push(numObject[item]);
})

console.log(resultArray.join(' '));