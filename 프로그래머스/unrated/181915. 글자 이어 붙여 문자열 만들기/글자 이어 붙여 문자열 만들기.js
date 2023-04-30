function solution(my_string, index_list) {
    let str = ''
    index_list.forEach(v=>{
        str += my_string[v]
    })
    return str
}