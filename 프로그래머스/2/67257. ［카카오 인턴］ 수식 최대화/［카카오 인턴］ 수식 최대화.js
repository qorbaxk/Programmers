function solution(expression) {
    /** 
    3가지 연산문자 (+, -, *) 연산수식 각각 받음
    우선순위를 재정의하여 가장 큰 숫자를 제출
    같은 연산자끼리는 앞에있는게 더 우선순위가 높음
    
    결과가 음수면 절댓값으로 변환해 제출
    음수든 양수든 제일 숫자가 큰게 우승자
    */
    
    // 우선순위 배열
    const operators = [
        ["*","+","-"],["*","-","+"],
        ["+","*","-"],["+","-","*"],
        ["-","+","*"],["-","*","+"],
    ]
    
    // 계산 함수
    const computes = (a, op, b)=>{
        switch(op){
            case '*':
                return Number(a)*Number(b)
            case "-":
                return Number(a)-Number(b)
            case "+":
                return Number(a)+Number(b)
                
        }
    }
    
    // 받을 우승상금 : 최댓값
    let money = 0
    // 우선순위가 정해져있으니 돌아가보면서 우승상금 계산
    for(let pr of operators){
        
        // 현재 풀어야할 문제를 분리
        let exp = expression.match(/\d+|[*+\-]/g);
        
        // 연산 우선 순위 대로 진행
        for(let op of pr){
            let stack = []
            
            for(let i=0; i<exp.length; i++){
                let now = exp[i]
                // 현재 연산자와 일치하면
                if(now === op){
                    // 이전에 넣어둔 숫자랑
                    const a = stack.pop()
                    // 다음에 올 숫자랑
                    const b = exp[++i]
                    
                    // 연산 진행
                    stack.push(computes(a,now,b))
                }else{
                    // 일치하지 않으면 그냥 추가
                    stack.push(now)
                }
            }
            
            // 진행한 결과로 다시 업데이트
            exp = stack
        }
        
        money = Math.max(money, Math.abs(exp[0]))
    }
    
    return money
    
}