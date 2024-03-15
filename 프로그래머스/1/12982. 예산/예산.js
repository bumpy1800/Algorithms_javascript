function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b).some((el)=>{
        if(el <= budget){
            budget = budget-el
            answer++
        }else{
            return true    
        }
        
    })
    return answer
}