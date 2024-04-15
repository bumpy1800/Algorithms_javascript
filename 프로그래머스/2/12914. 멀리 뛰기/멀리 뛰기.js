function solution(n) {
    let answer;
    let x = 0;
    let y = 1;
    for(let i=2; i<=n+1; i++){
        answer = (x+y)%1234567
        x = y
        y = answer
    }
    return answer;
}