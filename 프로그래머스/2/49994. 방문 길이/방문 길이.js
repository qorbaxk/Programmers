function solution(dirs) {
    
    // 이동하고자 하는 방향
    const directions = {
        'U':[0,1],
        'D':[0,-1],
        'R':[1,0],
        'L':[-1,0]
    }
    
    
    // 방문 경로 저장할 맵
    const map = new Map()
    
    // 기본 위치
    let [nowX, nowY] = [5,5]
    
    let count = 0
    
    // 방향 순회
    for(let d of dirs){
        // 이동하고자 하는 방향
        const [x,y] = directions[d]
        
        // 좌표 안에 들어올 때만 진행
        if(nowX+x >= 0 && nowX+x <= 10 && nowY+y >= 0 && nowY+y <= 10){
            
            // 좌표 확인을 위한 이전 값
            let prevX = nowX
            let prevY = nowY
            
            // 방향 이동
            nowX += x
            nowY += y
            
            // 경로 확인을 위한 양방향 형태로 저장
            const key1 = `${prevX}${prevY}-${nowX}${nowY}`
            const key2 = `${nowX}${nowY}-${prevX}${prevY}`
            
            // 이미 키가 저장되어 있는 경우
            if(map.has(key1)||map.has(key2)){
                // 키 값을 저장
                map.set(key1, (map.get(key1)||0)+1)
            }else{
                // 저장되어 있지 않은 경우에만 카운팅
                count++
                // 키 값을 저장
                map.set(key1, (map.get(key1)||0)+1)
            }
        }else continue;   
    }
    return count
}