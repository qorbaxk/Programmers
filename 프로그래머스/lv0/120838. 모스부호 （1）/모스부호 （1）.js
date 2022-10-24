const solution = (letter) => {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    letter = letter.split(' ');
    let answer = letter.map(x=>morse.indexOf(x))
    return answer.map(v=>String.fromCharCode(v+97)).join('');
}