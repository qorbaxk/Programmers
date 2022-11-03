const solution = (n) => {
    let result = 0;
    for(let i=n-1; i>=1; i--){
        result = n%i === 1 ? i : result;
    }   
    return result;
}