const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [[N], REGION_ARRAY, [MAX_BUDGET]] = input

if(REGION_ARRAY.reduce((acc,el)=>acc+el,0) <= MAX_BUDGET){
  console.log(Math.max(...REGION_ARRAY))
}else{
  console.log(binarySearch(REGION_ARRAY, 0, MAX_BUDGET))
}

function binarySearch(data, tail, head) {
  let mid = 0;
  let result = 0;
  let max = 0;
  while(tail<=head){
    mid = Math.floor((tail+head)/2)

    result = totalSum(data, mid)
    
    if(result > MAX_BUDGET){
      head = mid-1
    }else{
      max = max < totalMax(data,mid) ? totalMax(data,mid) : max
      tail = mid+1
    }
  }
  return max
}

function totalSum(data, mid){
  return data.reduce((acc,el)=>{
    if(el < mid){
      return acc+el
    }else{
      return acc+mid
    }
  },0)
}
function totalMax(data, mid){
  if(Math.max(...data) > mid){
    return mid
  }else{
    return Math.max(...data)
  }
}