function solution(todo_list, finished) {
    let idx = finished.map((e,i)=>e===false?i:null).filter(v=>v!==null)
    return idx.map(v=>todo_list[v])
}