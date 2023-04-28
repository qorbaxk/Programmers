function solution(a, b) {
    let sum = [Number(String(a)+String(b)),Number(String(b)+String(a))]
    return Math.max(...sum)
}