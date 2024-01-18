function solution(a, b) {
    /*
        accumulate = 연산결과 누적 값
        currentValue = 현재 순환배열 값
        currentIndex = 현재 순환배열 인덱스
    */
    let result = a.reduce((accumulate,currentValue, currentIndex)=>{
        return accumulate += currentValue * b[currentIndex]
    },0);
    
    return result;
}