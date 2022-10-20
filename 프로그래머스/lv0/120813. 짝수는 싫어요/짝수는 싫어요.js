const solution = (n) => {
    let arr = [];
    for(i=1; i<=n; i++){
        i%2!==0 ? arr.push(i) : null;
    }
    return arr;
}