const solution = (arr) => {
    let min = Math.min(...arr);
    arr = arr.filter(x=>x!==min);
    return arr.length?arr:[-1];
}