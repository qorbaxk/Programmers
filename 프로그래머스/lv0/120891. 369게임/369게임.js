function solution(order) {
    let count = 0;
    let str = String(order).split('')
    const clap = ['3','6','9']
    return str.filter(v=>clap.includes(v)).length
    
}