function solution(array, commands) {
    var answer = [];
    for(let command of commands){
        let [i,j,k] = [...command]
        answer.push(array.slice(i-1,j).sort((a,b)=>a-b)[k-1])
    }
    return answer;
}