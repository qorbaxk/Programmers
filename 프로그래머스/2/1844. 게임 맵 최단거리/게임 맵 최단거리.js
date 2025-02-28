function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    // 이동할 네 가지 방향 (상, 하, 좌, 우)
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];
    
    // BFS를 위한 Queue
    const queue = [];
    queue.push([0, 0, 1]); // [x, y, 이동 거리]
    
    // 방문 여부 기록
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    visited[0][0] = true;
    
    while(queue.length) {
        const [x, y, dist] = queue.shift();
        
        // 목표 지점에 도달하면 이동 거리를 리턴
        if(x === n - 1 && y === m - 1) return dist;
        
        // 네 가지 방향으로 이동
        for(const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            // 맵의 범위를 벗어나지 않고, 벽이 아니며, 방문하지 않은 곳이면 이동
            if(nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    // 모든 경로를 탐색해도 도착할 수 없다면 -1 리턴
    return -1;
}