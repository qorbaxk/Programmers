function solution(maps) {
    
    // 맵의 크기
    const n = maps.length;
    const m = maps[0].length;
    // 4가지 방향
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    // 시작점 x,y
    const startX = maps.findIndex((v) => v.includes('S'));
    const startY = maps[startX].indexOf('S');
    
    // visited[x][y][0 or 1]: 레버 안당김(0), 당김(1) 상태
    const visited = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => [false, false])
    );
    visited[startX][startY][0] = true;
    
    // 담을 큐
    const queue = [[startX, startY, 0, false]];
    
    while (queue.length) {
        const [x, y, sec, isOpen] = queue.shift();

        // 출구 도달 && 레버 당긴 상태면 탈출
        if (maps[x][y] === 'E' && isOpen) return sec;

        for (const [dx, dy] of directions) {
            // 방향 옮겨가며 확인
            const nx = x + dx;
            const ny = y + dy;

            // 맵의 크기 안에 들면서, 벽이 아닐 때 진행
            if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] !== 'X') {
                // 레버인 경우 열림 처리
                const nextOpen = isOpen || maps[nx][ny] === 'L';
                const openIndex = nextOpen ? 1 : 0;

                if (!visited[nx][ny][openIndex]) {
                    visited[nx][ny][openIndex] = true;
                    queue.push([nx, ny, sec + 1, nextOpen]);
                }
            }
        }
    }

    return -1; // 탈출 불가
}