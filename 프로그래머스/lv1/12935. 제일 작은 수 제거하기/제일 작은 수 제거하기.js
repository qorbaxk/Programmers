const solution = (arr) => {
    if(arr.length===1) return [-1];
    let min = Math.min(...arr);
    arr = arr.filter(x=>x!==min);
    return arr;
}