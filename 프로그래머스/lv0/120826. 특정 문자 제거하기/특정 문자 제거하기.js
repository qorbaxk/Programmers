const solution = (my_string, letter) => {
    let string = [...my_string];
    return string.filter(x=>x !== letter).join('');
}