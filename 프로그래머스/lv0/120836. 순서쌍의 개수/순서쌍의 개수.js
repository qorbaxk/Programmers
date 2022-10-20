const solution = (n) => {
    let num = [];
    for(i=1; i<=n; i++){
        n%i == 0 ? num.push(i) : null; 
    }
    return num.length;
}