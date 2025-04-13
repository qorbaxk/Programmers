function solution(n) {
    // n의 다음 큰 숫자
    // 2진수 변환시 1의 갯수가 같음
    
    // n을 2진수로 변환 시 1의 갯수
    const n2 = n.toString(2).split("").reduce((a,b)=>{
        if(b==1) return a+1
        else return a
    },0)
    
    let next = n+1
    
    while(next){
        
        const change2 = next.toString(2).split("").reduce((a,b)=>{
            if(b==1) return a+1
            else return a
        },0)
        
        if(n2 === change2) return next
        else{
            next++
        }
    }
}