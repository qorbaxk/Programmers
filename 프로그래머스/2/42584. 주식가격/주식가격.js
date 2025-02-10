function solution(prices) {
    
    let result = []
    
    for (let i=0; i<prices.length; i++){
        for(let j=i+1; j<prices.length; j++){
            // 초가 지나왔으므로 해당 초 가격에 +1
            result[i] = (result[i] || 0) + 1
            // 지난 가격이 현재 가격보다 높다면 떨어진 것이므로 거기서 멈추고 해당 순회 끝
            if(prices[i] > prices[j]) break;
        }
    }
    
    // 마지막 초단위에서는 변하지 않으므로
    result.push(0)
    
    return result
}