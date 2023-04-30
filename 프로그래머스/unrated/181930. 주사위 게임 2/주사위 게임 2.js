function solution(a, b, c) {
    const dup = [...new Set([a,b,c])].length
    if(dup===3){
        return a+b+c
    }else if(dup===2){
        return (a+b+c)*(a**2+b**2+c**2)
    }else{
        return (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3)
    }
}