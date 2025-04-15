class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];

            if (element >= parent) break;

            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let left, right;
            let swap = null;

            if (leftIdx < length) {
                left = this.heap[leftIdx];
                if (left < element) swap = leftIdx;
            }

            if (rightIdx < length) {
                right = this.heap[rightIdx];
                if (
                    (swap === null && right < element) ||
                    (swap !== null && right < left)
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;

            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    for (const s of scoville) {
        heap.insert(s);
    }

    let shake = 0;

    while (heap.size() >= 2 && heap.peek() < K) {
        const first = heap.extractMin();
        const second = heap.extractMin();
        const mixed = first + second * 2;
        heap.insert(mixed);
        shake++;
    }

    return heap.peek() >= K ? shake : -1;
}