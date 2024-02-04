function solution(progresses, speeds) {
    let answer = [];
    let count = 0
    while(progresses.length !== 0){
        progresses = progresses.map((value,index)=>{
            return value += speeds[index];
        })
        while(progresses[0] >= 100){
            progresses.shift()
            speeds.shift()
            count++
        }
        if(count){
            answer.push(count);
            count = 0;
        }
    }
    return answer;
}