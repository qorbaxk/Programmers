function solution(my_string) {
    regex = new RegExp('[^0-9]', 'g')
    let newArr = my_string.replace(regex,'').split('')
    return newArr.reduce((a,b)=>a + +b,0)
}