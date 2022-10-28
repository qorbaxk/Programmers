const solution = (denum1, num1, denum2, num2) => {
    
    let getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a);
    let denum = denum1*num2+denum2*num1;
    let num = num1*num2;
    let gcd = getGCD(denum,num)
    
    return [denum/gcd, num/gcd]
}