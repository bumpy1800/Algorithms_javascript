function solution(k, tangerine) {
    var answer = 0;
    let obj = {}
    tangerine.forEach((v)=>{
        obj[v] = obj[v] ? obj[v] + 1 : 1
    })
    let array = Object.values(obj).sort((a,b)=>b-a)
    let sum = 0
    array.some((v)=>{
        answer++
        sum+=v
        if(sum>=k){
            return true
        }
        
        return false
    })
    
    return answer;
}