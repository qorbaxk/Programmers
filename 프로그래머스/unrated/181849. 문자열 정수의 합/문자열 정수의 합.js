function solution(num_str) {
    num_str = [...num_str]
    return num_str.reduce((a,b)=>Number(a)+Number(b),0)

}