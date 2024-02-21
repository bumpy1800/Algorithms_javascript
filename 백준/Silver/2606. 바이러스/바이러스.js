const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

input.shift();
input.shift();

const listGraph = [];
const stack = [];
const wormPCList = [];
const wormPC = 1;

// 인접리스트 생성
for(let [a, b] of input){
  !listGraph[a] ? listGraph[a] = [b] : listGraph[a].push(b)
  !listGraph[b] ? listGraph[b] = [a] : listGraph[b].push(a)
}

DFS(listGraph[wormPC])

function DFS(nodeList){
  
  // stack에 저장 및 바이러스 pc리스트에도 저장
  if(nodeList){
    nodeList = Array.isArray(nodeList) ? nodeList : [nodeList]
    nodeList.forEach((node) => {
      if(wormPCList.indexOf(node) === -1){
        stack.push(node)
        wormPCList.push(node)
      }
    });
  }
  if(!stack.length){
    let result = wormPCList.indexOf(wormPC) === -1 ? Array.from(new Set(wormPCList)).length : Array.from(new Set(wormPCList)).length-1
    return console.log(result);
  }else{
    return DFS(listGraph[stack.pop()])
  }
}