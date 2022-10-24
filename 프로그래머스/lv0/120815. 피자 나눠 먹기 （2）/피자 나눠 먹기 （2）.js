const solution = (n) => {

    let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
    
    if(6%n===0){
        return 1;
    }else{
        return ((n*6)/getGCD(6,n))/6;
    }
}