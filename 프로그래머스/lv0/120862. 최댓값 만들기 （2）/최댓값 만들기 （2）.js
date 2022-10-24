const solution = (numbers) => {
    numbers = numbers.sort((a,b)=>a-b);
    let max1 = numbers[0]*numbers[1];
    let max2 = numbers[(numbers.length)-1]*numbers[(numbers.length)-2];
    let arr = [max1,max2];
    return Math.max(...arr);
    
}