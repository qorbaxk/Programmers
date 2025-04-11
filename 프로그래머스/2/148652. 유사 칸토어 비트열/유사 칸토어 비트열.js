function solution(n, l, r) {
    // 0 => 00000
    // 1 => 11011
    // 2 => 11011 11011 00000 11011 11011
    
    const calc = (n, start, end, l, r)=>{
        
        if(r < start || l > end) return 0
        
        if(n === 0) return 1
        
        // 현재 구간의 글자 수 길이
        const len = Math.pow(5,n)
        // 현재 구간의 구역 길이 (5글자씩 한덩이니까)
        const sectionLen = len / 5
        
        let count = 0
        for(let i=0; i<5; i++){
            const ss = start + sectionLen * i
            const se = ss + sectionLen - 1
            
            if(i===2) continue
            count += calc(n-1, ss, se, l, r)
        }
        return count
    }
    
    return calc(n, 1, Math.pow(5,n), l, r)
}