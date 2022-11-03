const solution = (left,right) => {
    let result = 0;
    let i,j;
    for(i=left; i<=right; i++){
        let count = 0;
        for(j=1; j<=i; j++){
            i%j?count:count++;
        }
        result = count%2?result-i:result+i;
    }
    return result;
}