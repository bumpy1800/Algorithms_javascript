function solution(n)
{
    var ans=0
    while(n>0){
        if(n%2){
            ans++
            n=n-1
        }else{
            n=n/2
        }
    }

    return ans;
}