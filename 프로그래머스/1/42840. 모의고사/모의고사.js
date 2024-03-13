function solution(answers) {
    let rank = []
    const type = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    type.forEach((type_value,type_idx)=>{
        let count = 0;
        answers.forEach((answer_value,answer_idx)=>{
            if(answer_value === type_value[answer_idx % type_value.length]){
                count++
            }
        })
        rank.push(count)
    })
    let answer = []
    let maxNum = Math.max(...rank)
    console.log(maxNum)
    rank.forEach((value,idx)=>{
        if(value == maxNum){
            answer.push(idx+1)    
        }
    })
    return answer.map(Number).sort((a,b)=>a-b);
}