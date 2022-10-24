const solution = (i,j,k) => {
    let result = 0;
    for(let n=i; n<=j; n++){
        result += n.toString().split('').filter(x=>x==k).length;
    }
    return result;
}