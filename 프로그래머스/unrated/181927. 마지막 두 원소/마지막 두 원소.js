function solution(num_list) {
    let last = num_list[num_list.length-1]
    let preLast = num_list[num_list.length-2]
    last>preLast?num_list.push(last-preLast):num_list.push(last*2)
    return num_list
}