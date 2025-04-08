function solution(board) {
    // 상하좌우 가장자리 부딪힐 때 까지 이동
    // . 빈공간, R 처음위치, D 장애물 위치, G 목표지
    
    const n = board.length;
    const m = board[0].length;
    
    // 이동할 방향
    const directions = [[0,1],[0,-1],[1,0],[-1,0]]
    
    
    // 시작 위치
    const sx = board.findIndex((v)=>v.includes('R'))
    const sy = board[sx].indexOf('R')
    
    // 진행할 큐
    const queue = []
    queue.push([sx,sy,0])
    
    // 방문 기록 남길 배열
    const visited = Array.from({length:n},()=>Array(m).fill(false))
    visited[sx][sy] = true
    

    while(queue.length){
        // 빼낸 현재 바라보고 있는 값
        const [x,y,sum] = queue.shift()
        
        // 출구를 도달했으면 탈출
        if(board[x][y] === 'G') return sum
        
        // 4방향대로 이동
        for(const [dx, dy] of directions){
            let nx = x
            let ny = y
            
            // 벽이나 장애물 만날 때까지 이동
            while(true){
                const tx = nx + dx;
                const ty = ny + dy;
                
                if(tx < 0 || ty < 0 || tx >= n || ty >= m || board[tx][ty] === 'D'){
                    break;
                }
                
                nx = tx;
                ny = ty;
            }
            
            // 방문한적 없어야 진행
            if(!visited[nx][ny]){
                visited[nx][ny] = true
                // 다음이 장애물 이거나, 보드의 끝일 경우에만 횟수 추가
                queue.push([nx,ny, sum+1])
            }
            
        }
        
        
    }
    
    
    return -1
}