const solution = (my_string) => {
    
    const Calculator = (n1, n2, operator) => {
        return operator === '+' ? n1+n2 : operator === '-' ? n1-n2 : null;
    }
    
    my_string = my_string.split(" ").map((x,i)=>i%2==0?Number(x):x);
    let result = my_string[0];
    for(let i=1; i<my_string.length; i+=2){
        result = Calculator(result,my_string[i+1],my_string[i])
    }
    
    return result;
}