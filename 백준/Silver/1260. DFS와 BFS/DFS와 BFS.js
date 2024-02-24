const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N,M,start] = input[0]

input.shift()

const graph = Array.from(Array(N+1), () => Array(N+1).fill(0))

for(let [n1,n2] of input){
  if(!graph[n1][n2]) graph[n1][n2] = 1
  if(!graph[n2][n1]) graph[n2][n1] = 1
}
dfs(start)
bfs(start)
function dfs(start){
  const stack = []
  const visitStack = []
  let currentNode = 0;

  stack.push(start)

  const dfsTravel = ()=>{
    if(!stack.length) return;

    currentNode = stack.pop()
    if(visitStack.indexOf(currentNode) === -1) visitStack.push(currentNode)

    for(let i = graph[currentNode].length; i > 0; i--){
      if(graph[currentNode][i] === 1 && !visitStack.includes(i)){
        stack.push(i)
        //break
      }
    }
    dfsTravel()
  }
  dfsTravel()
  console.log(visitStack.join(' '))
}
function bfs(start){
  const queue = []
  const visitQueue = []
  let currentNode = 0;

  queue.push(start)

  while(queue.length){
    currentNode = queue.shift()
    if(visitQueue.indexOf(currentNode) === -1) visitQueue.push(currentNode)

    for(let i = 0; i < graph[currentNode].length; i++){
      if(graph[currentNode][i] === 1 && !visitQueue.includes(i)){
        queue.push(i)
      }
    }
  }
  
  console.log(visitQueue.join(' '))
}