function solution(k, m, score) {
    if(score.length<m){
        return 0;
    }
    var answer = 0;
    score.sort((a,b)=>a-b)
    while(score.length>=m){
        answer += score.splice(score.length-m,m)[0]*m
    }
    return answer;
}