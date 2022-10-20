const solution = (my_string) => {
    let regex = new RegExp('[^0-9]', 'g');
    let result = my_string.replace(regex, '');
    let arr = result.split('');
    return arr.reduce((a,b)=>parseInt(a)+parseInt(b),0);
}