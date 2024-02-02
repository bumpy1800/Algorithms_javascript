function solution(arr)
{
    let answer = [];
    let head = -1;
    let tail = -1;
    
    arr.forEach((item,index)=>{
        if(answer[tail] !== arr[index]){
            answer.push(item);
            tail += 1;
        }
    });

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer)
    
    return answer;
}