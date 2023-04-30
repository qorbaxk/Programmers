function solution(my_string, is_suffix) {
    return my_string.includes(is_suffix) && is_suffix[is_suffix.length-1] === my_string[my_string.length -1] ? 1: 0
}