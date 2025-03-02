function solution(n, computers){
    const visited = new Array(n).fill(false);

    function dfs(node) {
        // 현재 노드 방문 처리
        visited[node] = true;
        
        for (let i = 0; i < n; i++) {
            // 자기 자신이 아니고, 연결되어 있으며, 아직 방문하지 않은 경우 탐색
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    let networkCount = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {  // 아직 방문하지 않은 노드라면
            dfs(i);         // DFS 탐색 시작
            networkCount++; // 네트워크 개수 증가
        }
    }

    return networkCount;
}