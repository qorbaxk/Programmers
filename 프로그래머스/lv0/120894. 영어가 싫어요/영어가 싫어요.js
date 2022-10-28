const solution = (numbers) => {
    
    const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    let regex;
    for(let i=0; i<eng.length; i++){
        regex = new RegExp(eng[i],'g')
        numbers  = numbers.replace(regex,i)   
    }
    
    return Number(numbers) ;
}