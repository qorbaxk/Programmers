function solution(n) {
    let fac = 1
    for(let i=1; i<=n; i++){
        fac*=i    
        if(fac===n) return i
        if(fac>n) return i-1
    }
 
}