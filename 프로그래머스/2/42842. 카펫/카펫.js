function solution(brown, yellow) {
    // (w-2)*(h-2) == yellow
    // w*h == brown+yellow
    var answer = [];
    const area = brown+yellow
    for(let h=1;h<=area;h++){
        let w = Math.floor(area/h)
        
        if(h>w) console.log('goal')
        if((w-2)*(h-2)===yellow){
            answer.push(w,h)
            break
        }
    }
    return answer;
}