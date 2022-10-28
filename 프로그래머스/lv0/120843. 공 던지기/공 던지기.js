const solution = (numbers, k) => {
    const next = (index) => (index+2)%numbers.length;
    let num = 0;
    for(let i=0; i<k-1; i++){
        num = next(num)
    }
    return numbers[num]
}