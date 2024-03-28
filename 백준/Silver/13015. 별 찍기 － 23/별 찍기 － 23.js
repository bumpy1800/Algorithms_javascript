const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const height = input.flat()[0]
const width = (height*2-3) + height*2

let star;
for(let i=0; i<height; i++){
  star = ''
  for(let j=0; j<width-i; j++){
    if(j>=i && j<i+height || j >= width-i-height){
      if(i==0){
        star+='*'
      }else{
        if(j==i || j==i+height-1 || j==width-height-i || j==width-i-1){
          star+='*'
        }else{
          star+=' '
        }
      }
    }else{
      star+=' '
    }   
  }
  console.log(star);
}
for(let i=height-2; i>=0; i--){
  star = ''
  for(let j=0; j<width-i; j++){
    if(j>=i && j<i+height || j >= width-i-height){
      if(i==0){
        star+='*'
      }else{
        if(j==i || j==i+height-1 || j==width-height-i || j==width-i-1){
          star+='*'
        }else{
          star+=' '
        }
      }
    }else{
      star+=' '
    }   
  }
  console.log(star);
}