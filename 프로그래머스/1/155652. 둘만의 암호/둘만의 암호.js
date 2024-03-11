function solution(s, skip, index) {
    let answer = []
    
    // 아스키코드로 변환
    s = s.split('').map((value)=>value.charCodeAt())
    skip = skip.split('').map((value)=>value.charCodeAt())
    skip = Array.from(new Set(skip.sort((a,b)=>a-b)))

    s.forEach((sValue)=>{
        let tempValue = sValue
        // [1~index]배열 생성 후 순환
        Array(index).fill().map((value,idx)=>idx+1).forEach((value,idx)=>{
            tempValue++
            if(tempValue > 122) tempValue = 97
            
            while(skip.includes(tempValue)){
                tempValue++
                if(tempValue > 122) tempValue = 97
            }
        })
        answer.push(String.fromCharCode(tempValue))
    })

    return answer.join('');
}