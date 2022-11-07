const solution = (array, commands) => {
    let answer = [];
    for(let d=0; d<commands.length; d++){
        let [i,j,k] = commands[d];
        let newArray = array.slice(i-1,j);
        newArray = newArray.sort((a,b)=>a-b);
        answer.push(newArray[k-1])
    }
    return answer;
}