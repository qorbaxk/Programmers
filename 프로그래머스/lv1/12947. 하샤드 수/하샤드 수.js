const solution = (arr) => {
    let sum = arr.toString().split('').reduce((a,b)=>a+Number(b),0);
    return arr%sum?false:true;
}