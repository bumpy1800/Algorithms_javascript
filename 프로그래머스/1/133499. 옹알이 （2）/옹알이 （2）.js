function solution(babbling) {
    var answer = 0;
    const babble = ["aya", "ye", "woo", "ma"]
    
    for(let word of babbling){
        // 연속된 옹알이가 있으면 스킵
        if(babble.some((v)=>word.includes(v+v))){
            continue
        }
        babble.forEach((v)=>{  
            word = word.replaceAll(v,' ')
        })
        if(word.replaceAll(' ','').length===0) answer++
    }
    return answer;
}