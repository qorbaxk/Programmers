function solution(binomial) {
    let a = +binomial.split(' ')[0]
    let b = +binomial.split(' ')[2]
    let op = binomial.split(' ')[1]
    switch(op){
        case '+':
            return a+b
        case '-':
            return a-b
        case '*':
            return a*b
    }
    
    
}