function solution(book_time) {
    // 시간을 분 단위로 변경하여 계산하기 쉽도록 처리
    const toMinutes = (time)=>{
        const [h, m] = time.split(":").map(Number)
        return h*60 + m
    }
    
    // 전체 예약 시간을 정렬
    const sortedBookTime = book_time.map((time)=>{
        const [start, end] = time
        return [toMinutes(start),toMinutes(end)]
    }).sort((a,b)=>a[0]-b[0])
    
    // 방 확인(마감시간 저장)
    const rooms = []
    
    // 전체 예약 시간 순회
    for(let [start, end] of sortedBookTime){
        
        // 현재 예약 가능한 방 확인
        let possible = false
        
        for(let i=0; i<rooms.length; i++){
            // 가능한 시간대의 방이 존재할 경우 추가
            if(rooms[i]+10 <= start){
                possible=true
                rooms[i] = end
                break;
            }
        }
        
        // 전체 순회했는데 안될경우 새 방으로 추가
        if(!possible){
            rooms.push(end)
        }
    } 
    
    return rooms.length;  
}