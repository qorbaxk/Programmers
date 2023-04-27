function solution(my_string) {
    const moum = ['a','e','i','o','u']
    return [...my_string].filter(v=>!moum.includes(v)).join('')
}