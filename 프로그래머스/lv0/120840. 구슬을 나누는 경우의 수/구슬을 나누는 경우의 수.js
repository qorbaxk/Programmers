const solution = (balls, share) => {
    
    const factorial = (n) => {
        let result = BigInt(1);
        for(let i=2; i<=n; i++) {
            result *= BigInt(i);  
        }
        return result;
    }
    
    return Number(factorial(balls)/(factorial(balls-share)*factorial(share)));
}