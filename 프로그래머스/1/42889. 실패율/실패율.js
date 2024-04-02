function solution(N, stages) {
    var answer = [];
    let userStart = -1
    let userEnd = -1
    let failRate = 0
    stages = stages.sort((a,b)=>b-a)
    for(let i=1; i<=N; i++){
        userStart = stages.indexOf(i)
        userEnd = stages.lastIndexOf(i)+1
        if(userStart === -1){
            failRate = 0
        }else{
            failRate = (userEnd - userStart)/(stages.length-(stages.length-userEnd))
        }
        answer.push([i,failRate])
    }

    return answer.sort((a,b)=>b[1]-a[1]).map((value)=>{
        return value[0]
    });
}