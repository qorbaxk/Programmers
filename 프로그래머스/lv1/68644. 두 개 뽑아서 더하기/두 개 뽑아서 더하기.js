const solution = (numbers) => {
    numbers = numbers.sort((a,b)=>a-b);
    let result = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            if(i!==j){
                result.push(numbers[i]+numbers[j]);
            }
        }
    }
    result = [...new Set(result)];
    result = result.sort((a,b)=>a-b);
    return result;
}