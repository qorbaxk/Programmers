function solution(before, after) {
    before = [...before]
    after = [...after]
    before.sort()
    after.sort()
    return before.join('')===after.join('')?1:0
    
}