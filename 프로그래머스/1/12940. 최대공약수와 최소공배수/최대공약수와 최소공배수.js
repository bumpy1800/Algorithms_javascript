function solution(n, m) {
    var answer = [];
    let min,max = 0
    if(n<m){
      min = n  
      max = m
    }else{
      min = m  
      max = n
    }
    let cal = 0
    while(min !== 0){
        cal = max%min
        max = min
        min = cal
    }
    answer.push(max,n*m/max)
    return answer;
}