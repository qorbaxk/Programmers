const solution = (n,m) => {
    let getGCD = (num1,num2)=>(num2>0? getGCD(num2,num1%num2):num1);
    let getLCM = (n*m) / getGCD(n,m);
    
    return [getGCD(n,m),getLCM];
}