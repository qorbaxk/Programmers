function solution(my_string) {
    return [...my_string].filter((e,i,a)=>a.indexOf(e)==i).join('')
}