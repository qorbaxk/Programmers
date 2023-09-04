function solution(sides) {
    let a = Math.max(...sides) // 두개중에 긴거
    let b = Math.min(...sides) // 두개중에 짧은거
    let answer = 0;
    for(let c=(a-b)+1; c<=a; c++){
        answer++
    }
    for(let i=a+1; i<a+b; i++){
        answer++
    }
    return answer
    
    
}