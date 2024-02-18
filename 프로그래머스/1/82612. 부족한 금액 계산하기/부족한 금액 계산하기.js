function solution(price, money, count) {
    let answer = 0
    let sumPrice = 0;
    for(let i = 1; i<=count; i++){
        sumPrice += price*i;
    }
    answer = (sumPrice-money) <= 0 ? 0 : sumPrice-money
    return  answer;
}