function solution(sizes) {
    // 가로 세로가 어찌됐든 가장 큰 값들을 골라야 모두 수납이 가능
    let allMax = 0;
    let allMin = 0
    
    for(const size of sizes){
        const [w, h] = size
        
        // 가로와 세로 중에 더 큰값과 작은 값으로 나눔
        const max = Math.max(w, h)
        const min = Math.min(w, h)
        
        // 큰값들끼리 비교
        if(max > allMax){
            // 현재 값이 전체 값보다 크다면 변경
            allMax = max
        }
        
        // 작은값들끼리 비교
        if(min > allMin){
            // 현재 값이 전체 값보다 크다면 변경
            allMin = min
        }
    }
    
    return allMax * allMin
}