function solution(bridge_length, weight, truck_weights) {
    /**
    Q. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 
    bridge_length : 다리에 올라갈 수 있는 트럭 최대수
    weight : 다리가 견딜 수 있는 최대 무게(이하) 
    truck_weights : 대기중인 트럭 리스트
    */
    
    // 건널 트럭의 개수
    let n = truck_weights.length
    // 다리를 모두 건넌 트럭이 위치할 배열
    const complete = []
    // 다리를 건너는 중인 트럭이 위치할 배열
    const ing = Array(bridge_length).fill(0)
    // 걸리는 시간 카운트
    let count = 0
    
    
    // 모든 트럭이 다 건널 때 까지 순회
    while(complete.length < n){
        // 건너고자 하는 현재 트럭
        const truck = truck_weights[0]
        // 다리를 건너는 중인 트럭의 무게 (나갈 맨앞의 트럭 빼고) + 현재 트럭의 무게의 합
        const truckSum = ing.reduce((a,b)=>a+b,0) - ing[0] + truck
        // 올라갈 수 있는 무게 합보다 작아야 오를 수 있음
        if(truckSum <= weight){
            // 다리 맨 앞에 있는 트럭을 빼서 완주리스트에 추가함
            const fst = ing.shift()
            // 추가할때는 무게가 있어야지만 트럭이므로 트럭일때만 추가
            if(fst > 0){
                complete.push(fst)
            }
            const now = truck_weights.shift()
            // 진행중인 다리에 트럭 올림
            ing.push(now)
        }else {
            // 오를 수 없을 때는 그냥 앞에있는 것만 제거
            const fst = ing.shift()
            // 추가할때는 무게가 있어야지만 트럭이므로 트럭일때만 추가
            if(fst > 0){
                complete.push(fst)
            }
            // 0 을 다시 추가하여 다리 갯수 맞춤
            ing.push(0)
        }
        
        // 시간 카운트
        count++
    }
    

    return count
}