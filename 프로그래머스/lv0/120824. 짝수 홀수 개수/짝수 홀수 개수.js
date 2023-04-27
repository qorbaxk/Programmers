function solution(num_list) {
    let odd = num_list.filter(x=>x%2!==0).length
    let even = num_list.filter(x=>x%2===0).length
    return [even,odd]
}