const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' '));

let gear = []
for(let i=0; i<4; i++){
  gear[i] = input[i][0].split('') // 톱니바퀴
}

const clock = (gear)=>{
  gear.unshift(gear.pop()) // 시계방향
}
const unclock = (gear)=>{
  gear.push(gear.shift()) // 반시계방향
}

const searchGear = (gearIndex,direction)=>{ // 돌려야 할 톱니 탐색
  let rotationGear = [{gearIndex, direction}]
  let tempDirection = direction
  for(let i=gearIndex; i>0; i--){ // 왼쪽
    if(gear[i][6] !== gear[i-1][2]){
      tempDirection *= -1
      rotationGear.push({
        gearIndex:i-1,
        direction: tempDirection
      })
    }else{
      break
    }
  }
  tempDirection = direction
  for(let i=gearIndex; i<gear.length-1; i++){ // 오른쪽
    if(gear[i][2] !== gear[i+1][6]){
      tempDirection *= -1
      rotationGear.push({
        gearIndex:i+1,
        direction: tempDirection
      })
    }else{
      break
    } 
  }
  return rotationGear
}

for(let i=5; i<input.length; i++){ // 톱니바퀴 돌리기
  let [gearNum, direction] = input[i]

  searchGear(gearNum-1, direction).forEach(({gearIndex, direction})=>{
    direction > 0 ? clock(gear[gearIndex]) : unclock(gear[gearIndex])
  })
}

let totalScore = 0
for(let i=0; i<4; i++){
  totalScore += gear[i][0] === '1' ? 2**i : 0 // 점수 합산
}
console.log(totalScore)