function solution(record) {
    
    // uuid 를 key 로 가질 맵 생성
    const map = new Map()
    
    // 기록을 순회하면서 변화를 측정함
    record.forEach((r)=>{
        // 행동, 아이디, 닉네임으로 분리
        const [act, id, nick] = r.split(' ')
        // 기록은 뒤로 갈 수록 최신이 되므로, 닉네임을 업데이트 시킴
        if(nick){
            map.set(id, nick)
        }
    })
    
    const result = record.map((r)=>{
         // 행동, 아이디, 닉네임으로 분리
        const [act, id] = r.split(' ')
        
        // 현재 아이디를 가진 유저의 최신 닉네임을 찾음
        const lastNick = map.get(id)
        
        // change 일때는 따로 표시 안함
        const text = act === 'Enter'?'들어왔습니다.':act==='Leave'?"나갔습니다.":undefined
        
        return text ? `${lastNick}님이 ${text}` : undefined
    }).filter((v)=>v!==undefined)
    
    return result
}