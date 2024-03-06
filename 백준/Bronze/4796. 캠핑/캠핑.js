const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// L: 사용일, P: 연속일, V: 휴가일
for(let i=0;i<input.length-1;i++){
  let result = 0
  const [L, P, V] = input[i]
  result += Math.floor(V/P) * L
  result += (L - (V%P)) > 0 ? V%P : L
  console.log(`Case ${i+1}: ${result}`)
}