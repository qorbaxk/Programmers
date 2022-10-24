const solution = (cipher, code) => {
    cipher = [...cipher];
    let arr = [];
    for(i=(code-1); i<cipher.length; i+=code){
        arr.push(cipher[i]);
    }
    return arr.join('');
}