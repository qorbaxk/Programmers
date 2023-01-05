/*
const solution = (n) => {
    if(n<=0)return 0;
    if(n<=2)return 1;
    if(solution.cache[n]){
        return solution.cache[n];
    }else{
        return (solution.cache[n] = solution(n-1)+solution(n-2));
    }
}

solution.cache={};
*/
const solution = (n) => {
    let arr = [0,1];
    if(n<=1) return arr[n];
    for(let i=2; i<n+1; i++){
        arr.push((arr[i-2]+arr[i-1])%1234567)
    }
    return arr[n];
}