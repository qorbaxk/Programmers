function solution(sizes) {
    let min = []
    let max = []
    sizes.forEach((size)=>{
        max.push(Math.max(...size))
        min.push(Math.min(...size))
    })
    
    return Math.max(...min)*Math.max(...max)
    
}