function solution(x, y, n) {
    if (x === y) return 0;

    const visited = new Set();
    const queue = new Array(1_000_001); // 미리 큐 사이즈 확보 (빠름)
    let head = 0;
    let tail = 0;

    queue[tail++] = [x, 0];
    visited.add(x);

    while (head < tail) {
        const [now, count] = queue[head++];

        for (let next of [now + n, now * 2, now * 3]) {
            if (next === y) return count + 1;

            if (next < y + 1 && !visited.has(next)) {
                visited.add(next);
                queue[tail++] = [next, count + 1];
            }
        }
    }

    return -1;
}