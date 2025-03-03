function solution(tickets) {
    // ✅ 1. 티켓을 사전순으로 정렬 (항상 알파벳이 빠른 경로를 우선적으로 선택)
    tickets.sort((a, b) => a[1].localeCompare(b[1]));

    const path= []; // 최종 결과를 담을 배열
    const used = new Array(tickets.length).fill(false); // 방문 여부 체크

    // ✅ 2. DFS 탐색 (경로를 찾는 즉시 종료)
    function dfs(current, count) {
        path.push(current);

        if (count === tickets.length) return true; // 모든 티켓을 사용했다면 종료

        for (let i = 0; i < tickets.length; i++) {
            if (!used[i] && tickets[i][0] === current) { // 현재 공항에서 출발하는 티켓 찾기
                used[i] = true;
                if (dfs(tickets[i][1], count + 1)) return true; // 경로가 완성되면 즉시 반환
                used[i] = false;
            }
        }

        path.pop(); // 백트래킹 (경로가 완성되지 않으면 되돌리기)
        return false;
    }

    dfs("ICN", 0); // ✅ 항상 "ICN"에서 시작
    return path;
}