const solution = (denum1, num1, denum2, num2) => {
    
    let getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a);
    let lcm = (num1*num2) / getGCD(num1,num2);
    let nums = denum1*(parseInt(lcm/num1)) + denum2*(parseInt(lcm/num2));
    return [nums/getGCD(nums,lcm),lcm/getGCD(nums,lcm)]
}