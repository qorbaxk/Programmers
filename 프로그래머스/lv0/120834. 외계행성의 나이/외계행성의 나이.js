function solution(age) {
    let alphabet = []
    for(let i=97; i<=122; i++){
        alphabet.push(String.fromCharCode(i))
    }
    return String(age).split('').map(v=>alphabet[v]).join('')
}