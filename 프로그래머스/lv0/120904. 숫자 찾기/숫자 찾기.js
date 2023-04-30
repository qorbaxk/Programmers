function solution(num, k) {
    k = String(k)
    let idx = num.toString().split('').findIndex(v=>v===k)
    return idx<0?-1:idx+1
}