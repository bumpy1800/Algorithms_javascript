function solution(name, yearning, photo) {
    var answer = [];
    const nameYearning = new Map();
    
    for(let i=0;i<name.length;i++){
        nameYearning.set(name[i],yearning[i])
    }
    
    for(let photoArray of photo){
        let acc = 0;
        photoArray.forEach((value,idx)=>{
            acc += nameYearning.get(value) ?? 0
        })
        answer.push(acc)
    }
    return answer;
}