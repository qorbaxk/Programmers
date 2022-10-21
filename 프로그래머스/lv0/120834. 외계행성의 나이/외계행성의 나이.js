const solution = (age) => {
    const Alphabet = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97)).join("");
    age = age.toString().split('');
    return age.map(x=>Alphabet[x]).join('');
}