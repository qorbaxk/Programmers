function solution(tickets) {
    
    const result = []
    
    // 주어진 항공권을 모두 이용 > tickets 를 모두 소진해야됨
    const dfs = (tks, visited)=>{
        // 티켓이 모두 소진됐을 경우 그만 둠
        if(tks.length === 0){
            result.push(visited)
            return
        } 
        
        // 아직 방문한 공항이 없을 경우 인천부터 시작하도록 확인
        if(visited.length === 0){
            // 인천에서 시작하는 티켓이 여러장 있을 수 있으므로 여러장에서 출발
            const foundIcns = tks.filter(([a,b])=>a==='ICN')
            foundIcns.forEach((foundIcn)=>{
                const restTks = tks.filter((v)=>v!==foundIcn)
                dfs(restTks, [...foundIcn])   
            })
            
        }else{
            // 마지막으로 방문한 공항을 찾고
            const lastVisit = visited[visited.length-1]
            // 마지막으로 방문한 공항으로 시작하는 티켓을 찾음
            const foundLasts = tks.filter(([a,b])=>a===lastVisit)
                   
            // 만약 마지막으로 방문한 공항으로 가는 티켓이 없을 경우엔 지금 해당경로가 문제가 있으므로 리턴
            if(foundLasts.length === 0) return
            // 마지막으로 방문한 공항으로 시작하는 티켓 모두 순회
            foundLasts.forEach((foundLast)=>{
                const restTks = tks.filter((v)=>v!==foundLast)
                dfs(restTks, [...visited, foundLast[1]])
            })
            
     
            
        }
    }
    
  
    dfs(tickets, [])
    
    
    // 결과 배열중에서 알파벳 순으로 정렬하여 더 앞서는 순으로 결과 도출
    result.sort((a,b)=>{
        for(let i=0; i<a.length; i++){
            if(a[i] !== b[i]) return a[i].localeCompare(b[i])
        }
        return a.length - b.length
    })
    return result[0]

}