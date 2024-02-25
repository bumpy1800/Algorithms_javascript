const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

const [row,col] = input[0].join('').split(' ')

input.shift()

console.log(colTravel()+rowTravel())

function colTravel(){
  let drawing = false;
  let count = 0
  
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
      if(input[i][j] === '-' && !drawing){
        drawing = true
      }
      if(input[i][j] === '|' && drawing){
        drawing = false
        count++
      }
    }
    if(drawing) count ++
    drawing = false;  
  }
  return count
}
function rowTravel(){
  let drawing = false;
  let count = 0
  
  for(let i=0;i<col;i++){    
    for(let j=0;j<row;j++){
      if(input[j][i] === '|' && !drawing){
        drawing = true
      }
      if(input[j][i] === '-' && drawing){
        drawing = false
        count++
      }
    }  
    if(drawing) count ++
    drawing = false;
  }
  return count
}