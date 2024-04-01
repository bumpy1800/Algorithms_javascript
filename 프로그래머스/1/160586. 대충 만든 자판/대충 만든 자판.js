function solution(keymap, targets) {
    var answer = [];
    let min = Infinity;
    let sum = 0;
    for(let target of targets){
        for(let i=0;i<target.length;i++){
            min = Infinity
            for(let key of keymap){
                let idx = key.indexOf(target[i])
                
                if(idx > -1){
                    min = Math.min(min, idx+1)
                }
            }
            sum += min
        }
        answer.push(sum)
        sum=0
    }
   answer = answer.map((value)=>{
        if(value == Infinity) {
            value = -1
        }
        return value
    })
    return answer;
}