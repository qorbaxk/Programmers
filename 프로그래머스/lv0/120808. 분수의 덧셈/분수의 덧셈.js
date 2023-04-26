function solution(numer1, denom1, numer2, denom2) {
    let getGCD = (num1,num2)=>{
        return num2>0?getGCD(num2,num1%num2):num1
    }
    
    let getLCM = (denom1*denom2) / getGCD(denom1,denom2)
    
    let firstNum = numer1*parseInt(getLCM/denom1)+numer2*parseInt(getLCM/denom2)
    let secondNum = getLCM
    let answerGCD = getGCD(firstNum,secondNum)
    
    let answer = [parseInt(firstNum/answerGCD), parseInt(secondNum/answerGCD)];
    return answer;
}