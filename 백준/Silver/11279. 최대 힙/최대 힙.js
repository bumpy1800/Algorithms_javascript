const fs = require('fs');
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n').map(Number);
    //.map((el) => el.split(' '));

input.shift()
const maxHeap = ['']
const resultArray = []

for(let i=0; i < input.length; i++){
  if(input[i] == 0){
    if(maxHeap[1]){
      resultArray.push(maxHeap[1]);
      maxHeap[1] = maxHeap[maxHeap.length-1];
      maxHeap.pop();
      heapPopSort();
    }else{
      resultArray.push(0)
    }
  }else{
    maxHeap.push(input[i])
    heapPushSort()
  }
}
console.log(resultArray.join('\n'))
function heapPushSort(){
  let index = maxHeap.length-1
  while (maxHeap[Math.floor(index/2)] && maxHeap[index] > maxHeap[Math.floor(index/2)]) {
    [maxHeap[Math.floor(index/2)], maxHeap[index]] = [maxHeap[index], maxHeap[Math.floor(index/2)]];
    index = Math.floor(index/2);
  }
  return;
}

function heapPopSort(){
  let index = 1;

  while (maxHeap[index*2]) { // 왼쪽자식이 없으면 오른쪽도 없음
    let childNode = maxHeap[index*2] < maxHeap[index*2+1] ? index*2+1 : index*2
    if(maxHeap[index] < maxHeap[childNode]){ // 왼쪽자식
      [maxHeap[index], maxHeap[childNode]] = [maxHeap[childNode], maxHeap[index]]
      index = childNode;
    }else{
      break;
    }
  }
}