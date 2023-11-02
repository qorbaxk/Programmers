function solution(nums) {
    let count = nums.length/2
    let no = new Set([...nums])
    let min = Math.min(count, [...no].length)
    return min
    
}