const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

// 100*100의 2차원 배열을 만들고 그 안을 전부 0으로 채운다
let canvas = Array.from(Array(100), () => Array(100).fill(0));

for (let paper of input) {
    if (!paper[1]) continue; // 색종이 갯수 데이터는 제외

    // 색종이의 크기부분을 canvas좌표에 1로 채운다
    for (let i = paper[0]; i < paper[0] + 10; i++) {
        for (let j = paper[1]; j < paper[1] + 10; j++) {
            canvas[i][j] = 1;
        }
    }
}

// 2차원 배열 총합 구하기
// 배열안에 배열구조로 2차원 배열이 생성되기 때문에 reduce안에 reduce를 사용함
let totalSize = canvas.reduce((acc, curValue) => {
    return (
        acc + curValue.reduce((acc2, curValue2) => {
            return acc2 + curValue2;
        }, 0)
    );
}, 0);

console.log(totalSize);
