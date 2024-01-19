const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el=>el.split(" "));

// 학점별 점수
const RANK_SCORE = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0.0,
};
let score = 0; // 학점 총합
let totalScore = 0; // 학점 * 평점 총합

// 2차원 배열로 받은 뒤 순환
for (let row of input) {
    /* 
        [0] : 과목명
        [1] : 학점
        [2] : 평점
    */
    if (row[2] === 'P') continue; // P일 경우 연산 제외

    score += row[1] * RANK_SCORE[row[2]];
    totalScore += Number(row[1]);
}

console.log((score / totalScore).toFixed(6));
