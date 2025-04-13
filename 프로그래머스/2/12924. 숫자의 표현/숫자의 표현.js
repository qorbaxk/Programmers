function solution(n) {
    // 자연수 n을 연속한자연수로 표현
    
    let answer = 0;
    
    const calc = (m)=>{
        // 애초에 같을때는 for문 실행도 안함
        if(m===n){
            answer+=1
        }else{
            let sum = 0; 
            for(let i=m; i<=n; i++){       
                // 더할 값이 n의 값을 초과해버린다면 그만
                if(sum > n) break;
                else if(sum === n){
                    // 더할 값이 정확하게 일치한다면
                    answer+=1
                    break;
                }else{
                    // 다 아닌 경우에 계속 더하기
                    sum += i
                }
            }
        }
    }
    
    for (let i=1; i<=n; i++){
        calc(i)
    }
    
    return answer
}