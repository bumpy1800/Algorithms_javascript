function solution(n, lost, reserve) {
    var answer = 0;
    const countObject = {}
    for(let i=1; i<=n; i++){
        countObject[i] = 1
        if(lost.indexOf(i) !== -1) countObject[i]--
        if(reserve.indexOf(i) !== -1) countObject[i]++
    }

    lost.sort().forEach((value,idx)=>{
        let before = value-1
        let after = value+1
        if(countObject[value] == 0){
            if(countObject[before] == 2){
                countObject[before]--
                countObject[value]++
            }else if(countObject[after] == 2){
                countObject[after]--
                countObject[value]++
            }
        }
    })
    Object.entries(countObject).forEach((value,idx)=>{
      if(value[1] > 0)  answer++
    })
    
    
    return answer;
}