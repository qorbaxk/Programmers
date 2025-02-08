function solution(priorities, location) {
    /**
    priorities : 프로세스의 중요도가 순서대로
    location : 몇 번째로 실행되는지 알고싶은 프로세스의 위치
    
    1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
    2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
    3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
      3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
    */
    
    let queue = priorities.map((v,idx)=>[idx, v])
    
    const result = []
    
    while(queue.length > 0){
        
        // 맨 앞에 있는 것 꺼냄
        const fst = queue.shift();
        // 현재의 우선순위보다 더 높은 우선순위가 존재하는지 확인
        const isExist = queue.some(([idx,v])=>v>fst[1])
        // 존재한다면
        if(isExist){
            // 꺼낸 것을 다시 뒤에 넣음
            queue.push(fst)
        }else{
            // 존재하지 않는다면 결과값에 넣음
            result.push(fst)
        }
    }
    
    // [idx, v] 형태로 저장했으므로 idx 가 location 과 같은 것을 찾아 위치 반환
    return result.findIndex(([idx,v])=>idx === location) + 1
    
    
}