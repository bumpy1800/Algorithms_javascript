function solution(n, words) {
    var answer = [0,0];
    let prevWords = [];
    let count = 0;
    let turn = 0;
    for(let word of words){
        if(count % n ==0) turn++;
        count++;
        
        
        if(prevWords.length===0){
            prevWords.push(word); 
            continue;  
        } 
        
        let prevWordTail = prevWords[prevWords.length-1];
        prevWordTail = prevWordTail[prevWordTail.length-1]
        let nowWordHead = word[0];
        
        if(prevWordTail != nowWordHead || prevWords.indexOf(word) != -1){
            let userNum = count%n==0 ? n : count%n;
            answer = [userNum, turn]; 
            break;  
        }
        prevWords.push(word);
    }

    return answer;
}