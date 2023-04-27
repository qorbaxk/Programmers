function solution(num_list) {
    if(num_list.length <= 10){
        return num_list.reduce((a,b)=>a*b,1)
    }else{
        return num_list.reduce((a,b)=>a+b,0)
    }
}