function solution(my_string) {
    let newArr = my_string.replace(/[^0-9]/g,'').split('')
    return newArr.reduce((a,b)=>a + +b,0)
}