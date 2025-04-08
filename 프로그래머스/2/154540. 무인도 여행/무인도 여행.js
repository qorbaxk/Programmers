function solution(maps) {
    /** 
    X 는 바다
    숫자는 식량
    상하좌우로 연결된 땅이 하나의 무인도
    결국 모든 구역을 탐색해야하니 dfs 로..
    */
    
    // 맵의 크기
    const n = maps.length;
    const m = maps[0].length;
    
    
    const result = []
    
    // 방문 체킹
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    
    const dfs = (x,y)=>{
        // 맵의 규모를 넘어갔으면 나감
        if (x < 0 || x >= n || y < 0 || y >= m) return 0;
        // 이미 방문한 곳이거나, 바다이면 나감
        if (visited[x][y] || maps[x][y] === 'X') return 0;
        
        // 현재 위치 방문 찍기
        visited[x][y] = true
        
        // 더할 값 생성
        let sum = Number(maps[x][y])
        // 상하좌우 이동
        sum += dfs(x+1,y)
        sum += dfs(x-1,y)
        sum += dfs(x,y+1)
        sum += dfs(x,y-1)
        
        return sum
    }
    
    
    // 각 인덱스마다 순회
    for (let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            // 방문하지 않고, 바다가 아닐때만
            if(!visited[i][j] && maps[i][j] !== 'X'){
                const total = dfs(i,j)
                result.push(total)
            }
        }
    }
    
    
    return result.length > 0 ? result.sort((a,b)=>a-b) : [-1]
}