function solution(s){

    // 괄호를 받을 스택
    let stack = []
    
    for (let i=0; i<s.length; i++){
        // 괄호가 열렸을 경우 push
        if(s[i] === '('){
            stack.push(s[i])
            // 괄호가 닫혔을 경우 마지막에 넣은 열린 괄호가 닫히게 되므로 pop 으로 제거
        }else if(s[i] === ')'){
            
            // 만약 더이상 뱉어낼 괄호가 없는데도 pop 을 해야하는 경우면 잘못됐으므로 false 처리
            if(stack.length === 0) return false
            
            stack.pop()
        }
    }
    
    return stack.length === 0 ? true : false
    
}