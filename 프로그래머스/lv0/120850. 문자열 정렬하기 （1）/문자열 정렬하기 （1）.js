function solution(my_string) {
    my_string = my_string.replace(/[^0-9]/g,'')
    return [...my_string].sort((a,b)=>a-b).map(v=>Number(v))
    
}