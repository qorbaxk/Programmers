const solution = (array) => {

    const result = array.reduce((accu,curr)=>{
        accu[curr] = (accu[curr] || 0)+1;
        return accu;
    },{});
    
    let sorted = Object.values(result).sort((a,b)=>b-a)
    let maxValue = Math.max(...Object.values(result));
    let maxKey =  Number(Object.keys(result).find(key => result[key] === maxValue));
    let answer = sorted[0] === sorted[1] ? -1 : maxKey
     
    if(array.length === 1){
        answer = array[0]
    }
    return answer;
}