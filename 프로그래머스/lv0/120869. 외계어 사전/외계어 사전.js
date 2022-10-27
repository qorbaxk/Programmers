const solution = (spell, dic) => {
    let answer = [];
    for(let i=0; i<spell.length; i++){
        answer.push(dic.filter(x=>x.includes(spell[i])))
    }
    answer = answer.flat()
    const redup = answer.reduce((accu,curr)=>{
        accu[curr] = (accu[curr] || 0) +1;
        return accu;
    },{});
    
    answer =  Object.keys(redup).filter(key=>redup[key]===spell.length);
    return answer.length>=1 ? 1 : 2;
}