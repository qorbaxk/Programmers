function solution(my_string, alp) {
    let str = [...my_string].map(v=>v===alp?v.toUpperCase():v)
    return str.join('')
}