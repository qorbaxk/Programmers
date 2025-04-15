function solution(topping) {
    // 각 조각에 동일한 가짓수의 토핑이 올라가면 공평
    // 종류의 개수만 같으면 됨
    // 공평하게 자르는 방법의 개수
    
    const left = new Map()
    const right = new Map()
    
    // 전체 토핑을 오른쪽에 일단 몰기
    for(let top of topping){
        right.set(top, (right.get(top) || 0) + 1)
    }
    
    let count = 0
    
    for(let i=0; i<topping.length; i++){
        const current = topping[i]
        
        // 왼쪽에 현재 토핑 추가
        left.set(current, (left.get(current)||0)+1)
        
        // 오른쪽에서 현재 토핑 제거
        right.set(current, right.get(current) - 1)
        // 만약에 오른쪽에서 0개 됐으면 제거 하기
        if(right.get(current) === 0){
            right.delete(current)
        }
        
        // 가짓수가 같다면 공평한 경우로 보고 추가
        if(left.size === right.size){
            count++
        }
    }
    
    return count
}