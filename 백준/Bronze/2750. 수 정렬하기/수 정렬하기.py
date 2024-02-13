# 2750번 문제 : 수 정렬하기
# n개의 수가 주어지면 오름차순으로 정렬하기

n=int(input())

num=[]

for i in range(n):
    x=int(input())
    num.append(x)

for j in range(n):
    for k in range(j+1,n):
        if(num[j]>num[k]):
            temp=num[j]
            num[j]=num[k]
            num[k]=temp

for p in range(len(num)):
    print(num[p])