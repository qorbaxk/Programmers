function solution(arr) {
    // 최소 공배수 구하는 식
    // LCM(a, b) = (a × b) / GCD(a, b)
    
    // 최소 공약수 먼저 구하기
    const GCD = (a,b)=>{
        while(b!==0){
            [a, b] = [b, a%b]
        }
        return a
    }
    
    // 최소 공배수 구하기
    const LCM = (a,b)=>{
        return (a*b) / GCD(a,b)
    }
    
    return arr.reduce((a,b)=>LCM(a,b))
}