function solution(my_string) {
    let noblank = my_string.replace(/ +/g, ' ')
    return noblank.split(' ').filter(v=>v!=='')
}