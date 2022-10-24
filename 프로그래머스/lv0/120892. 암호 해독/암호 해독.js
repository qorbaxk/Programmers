const solution = (cipher, code) => {
    let result = '';
    for(i=(code-1); i<cipher.length; i+=code){
        result += cipher[i];
    }
    return result;
}