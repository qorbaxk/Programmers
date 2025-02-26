function solution(numbers, target) {
    
    // target 인 숫자를 가지게 되는 방법의 개수
    let count = 0;
    
    // numbers 를 탐색하며 반복
    const dfs = (list, sum)=>{
        
        // list의 숫자를 모두 다 써서 없을때 종료
        if(list.length === 0) {
            // 지금까지의 합계가 target 숫자와 같으면 카운트 증가
            if(sum === target){
               count+=1
            }
            return
        }
    
        const now = list[0]
        const rest = list.slice(1,)
        
        // 더하는거 반복
        dfs(rest, sum+now)
        // 빼는거 반복
        dfs(rest, sum-now)
        
    }
    
    dfs(numbers, 0)
    
    return count
}