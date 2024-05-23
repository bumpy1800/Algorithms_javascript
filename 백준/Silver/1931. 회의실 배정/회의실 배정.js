const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

const N = input.shift()[0]

const booking = input.sort((a,b)=>{
  if(a[1]===b[1]) return a[0]-b[0]
  else return a[1]-b[1]
})
let endTime = 0
let count = 0

for(let i=0; i<N; i++){
  const [start, end] = booking[i]

  if(endTime <= start){
    count++
    endTime = end
  }
  
}
console.log(count)