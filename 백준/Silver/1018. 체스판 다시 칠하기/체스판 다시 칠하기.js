const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' '));

// 2가지 타입의 보드를 미리 만든다 (하양먼저, 검정먼저)
const W_BOARD = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
];

const B_BOARD = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
];

// 보드의 크기 저장 후 크기 정보 삭제
const N = input[0][0];
const M = input[0][1];
input.shift()

let resultBoard = [];
for(let row of input){
    resultBoard.push(row.toString().split(''))
}

function wCheckBoard(x,y){
    let count = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            //console.log(W_BOARD[i][j]);
            //console.log(resultBoard[i+x][j+y]);
            if(W_BOARD[i][j] != resultBoard[i+x][j+y]){
                //console.log(count);
                count++;
            }
        }
    }
    return count;
}

function bCheckBoard(x,y){
    let count = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            //console.log(B_BOARD[i][j]);
            //console.log(resultBoard[i+x][j+y]);
            if(B_BOARD[i][j] != resultBoard[i+x][j+y]){
                //console.log(count);
                count++;
            }
        }
        
    }
    return count;
}

let countArray = [];
for (let i = 0; i+7 < N; i++) {
    for (let j = 0; j+7 < M; j++) {
        countArray.push(wCheckBoard(i,j));
        countArray.push(bCheckBoard(i,j));
    }
}
console.log(countArray.sort((a,b)=>a-b)[0]);