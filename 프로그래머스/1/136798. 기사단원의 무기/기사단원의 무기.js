function solution(number, limit, power) {
    var answer = 0;
    const weaponArray = []
    for(let i=1; i<=number; i++){
        weaponArray.push(divisor(i))
    }
    answer = weaponArray.map((v)=>{
        if(v > limit){
            return power
        }else{
            return v
        }
    }).reduce((acc,v)=> acc+v)
    return answer;
}
function divisor(num){
    let divi = 0;
    for(let i=1; i<=Math.floor(num/2); i++){
        if(num%i === 0) divi++
    }
    return divi+1
}