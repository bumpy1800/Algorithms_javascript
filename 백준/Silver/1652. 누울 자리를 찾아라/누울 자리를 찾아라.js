const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
  //.map((el) => el.split(""));

const roomSize = Number(input.shift());
/*
let rowCount = 0;
let colCount = 0;
for(let i = 0; i < roomSize; i++){
  let rowTempCount = 0;
  let colTempCount = 0;
  for(let j = 0; j < roomSize; j++){

    if(input[i][j] === '.'){
      colTempCount++
    }else{
      if(colTempCount >= 2){
        colCount++
      }
        colTempCount = 0
    }

    if(input[j][i] === '.'){
      rowTempCount++
    }else{
      if(rowTempCount >= 2){
        rowCount++
      }
        rowTempCount = 0
    }  
  }
  if (rowTempCount >= 2) rowCount++;
  if (colTempCount >= 2) colCount++;
}

console.log(`${colCount} ${rowCount}`)
*/
function solution(count, input) {
  let row = 0, column = 0; 
 
  for (let i=0; i<count; i++) {
    row += input[i].split('X').filter(v => v.includes('..')).length;
 
    let columnCount = 0;  // 세로로 연속하는 빈 칸의 수
    for (let j=0; j<count; j++) {
      if (input[j][i] === '.') columnCount++;
      if (input[j][i] === 'X' || j === count - 1) {  // 짐이나 벽에 닿았을 때
        if (columnCount >= 2) column++;
        columnCount = 0;
      }
    }
  }
 
  return `${row} ${column}`
}

console.log(solution(roomSize, input));