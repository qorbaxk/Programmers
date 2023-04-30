function solution(num_list) {
    num_list.sort((a,b)=>a-b)
    return num_list.filter((_,i)=>i<5)
}