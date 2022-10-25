const solution = (array, n) => {
    array = array.sort((a,b)=>a-b);
    let abs= array.map(x=>Math.abs(x-n));
    let index = abs.indexOf(Math.min(...abs));
    return array[index]
   
}