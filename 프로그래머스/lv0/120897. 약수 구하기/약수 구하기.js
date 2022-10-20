const solution = (n) => {
    let arr = [];
    for(i=1; i<=n; i++){
        n%i == 0 ? arr.push(i) : null; 
    }
    return arr;
}