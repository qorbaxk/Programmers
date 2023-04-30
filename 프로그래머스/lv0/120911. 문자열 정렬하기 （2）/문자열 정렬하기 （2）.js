function solution(my_string) {
    let str = my_string.toLowerCase().split('')
    str.sort()
    return str.join('')
    
}