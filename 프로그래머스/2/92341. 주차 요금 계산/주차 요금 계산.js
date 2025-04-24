function solution(fees, records) {

    // 입고차 관리 맵
    const map = new Map()
    
    // 누적시간 관리 맵
    const answerMap = new Map()
    
    for(let i=0; i<records.length; i++){
        const [time, car, io] = records[i].split(" ")
        
        const [h, m] = time.split(":")
        const hm = Number(h)*60 + Number(m)
        
        // 입차인 경우 시간 저장
        if(io === 'IN'){
            map.set(car, hm)
        }else if(io === 'OUT'){
            // 출차인 경우 시간 빼서 누적
            answerMap.set(car, (answerMap.get(car)||0) + Math.abs(map.get(car) - hm))
            // 맵에서 제거
            map.delete(car)
        }
        
        // 만약 마지막인데 출차가 안된 경우 23:59에 출차된 것으로 간주
        if(i === records.length-1 && map.size > 0){
            map.forEach((value, key)=>{
                const lastTime = 23*60 + 59
                answerMap.set(key, (answerMap.get(key)||0) + Math.abs(value - lastTime))
                map.delete(key)
            })
        }
    }
    
    
    let result = []
    
    // 누적된 주차시간별로 확인
    answerMap.forEach((value, key)=>{
        
        // 현재 금액이 기본 시간 보다 작으면 기본 요금만 냄
        if(value <= fees[0]){
            result.push([key, fees[1]])
        }else{
            // 기본 요금 보다 크면 계산 진행
            let fee = fees[1] + Math.ceil((value - fees[0]) / fees[2]) * fees[3]
            result.push([key, fee])
        }
    })
    
    result.sort((a,b)=>Number(a[0])-Number(b[0]))
    
    
    return result.map((v)=>v[1])
}