function solution(n) {
    let count = 0;
    for(let i=4; i<=n; i++){
        if(i!==5 && i!==7){
            i!==5 && i!==7 && i%2===0 || i%3===0 || i%5===0 || i%7===0 ? count++ : null
        }
            
    }
    
    return count
}