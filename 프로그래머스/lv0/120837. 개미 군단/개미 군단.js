function solution(hp) {
    let result = 0;
    result = parseInt(hp/5) + parseInt((hp%5)/3) + parseInt((hp%5)%3)
    return result
}