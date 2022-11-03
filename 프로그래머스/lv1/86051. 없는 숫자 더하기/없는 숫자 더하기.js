const solution = (numbers) => {
    let arr = [0,1,2,3,4,5,6,7,8,9];
    let dif = arr.filter(x=>!numbers.includes(x));
    return dif.reduce((a,b)=>a+b,0)
}