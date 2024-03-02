function solution(s) {
    var answer = [];
    const wordArray = s.split('')
    const visitedWord = []
    for(let word of wordArray){
        if(visitedWord.lastIndexOf(word) === -1){
            answer.push(-1)
        }else{
            answer.push((visitedWord.length - visitedWord.lastIndexOf(word)))
        }
        visitedWord.push(word)
    }
    return answer;
}