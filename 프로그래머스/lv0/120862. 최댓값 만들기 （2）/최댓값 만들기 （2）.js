function solution(numbers) {
    numbers.sort((a,b)=>a-b)
    let max = [numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]]
    return Math.max(...max)
}