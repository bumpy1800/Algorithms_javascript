const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

  const height = (input.flat()[0]*2-1)
  const width = height*2-1

  let star = ''
  for(let i=1;i<=height;i++){
    star=''
    for(let j=1;j<=width;j++){
      if(i%2==1){
        if(j<i || j>width-i){
          j%2==1 ? star+='*' : star+=' '
        }else{
          star+='*'
        }
      }else if(i%2==0){
        if(j<i || j>width-i){
          j%2==1 ? star+='*' : star+=' '
        }else{
          star+=' '
        }
      }
    } 
    console.log(star)
  }
  for(let i=height-1;i>0;i--){
    star=''
    for(let j=1;j<=width;j++){
      if(i%2==1){
        if(j<i || j>width-i){
          j%2==1 ? star+='*' : star+=' '
        }else{
          star+='*'
        }
      }else if(i%2==0){
        if(j<i || j>width-i){
          j%2==1 ? star+='*' : star+=' '
        }else{
          star+=' '
        }
      }
    } 
    console.log(star)
  }