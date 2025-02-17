function solution(n, wires) {
    // 그래프 생성 (양방향)
    const buildGraph = (edges) => {
        const graph = new Map()
        for (const [a, b] of edges) {
            if (!graph.has(a)) graph.set(a, [])
            if (!graph.has(b)) graph.set(b, [])
            graph.get(a).push(b)
            graph.get(b).push(a)
        }
        return graph
    }

    // BFS 탐색으로 연결된 노드 개수 세기
    const countNodes = (start, graph, visited) => {
        const queue = [start]
        visited.add(start)
        let count = 1

        while (queue.length) {
            const node = queue.shift()
            for (const neighbor of graph.get(node) || []) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor)
                    queue.push(neighbor)
                    count++
                }
            }
        }

        return count
    }

    let minDifference = n

    // 하나의 간선을 제거하면서 모든 경우를 확인
    for (const [a, b] of wires) {
        // 현재 간선을 제외한 그래프 생성
        const filteredWires = wires.filter(([x, y]) => !(x === a && y === b) && !(x === b && y === a))
        const graph = buildGraph(filteredWires)

        // 한 쪽의 네트워크 크기 계산 (a에서 탐색 시작)
        const visited = new Set()
        const groupSize = countNodes(a, graph, visited)

        // 나머지 네트워크 크기는 전체 노드에서 빼면 됨
        const difference = Math.abs(n - 2 * groupSize)

        // 최소 차이 갱신
        minDifference = Math.min(minDifference, difference)
    }

    return minDifference
}