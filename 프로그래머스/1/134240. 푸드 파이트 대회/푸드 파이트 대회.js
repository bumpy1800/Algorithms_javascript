function solution(food) {
    var answer = food.map((value,idx)=>{
        return String(idx).repeat(Math.floor(value/2))
    });
    answer.shift()
    return answer.join('')+0+answer.reverse().join('');
}