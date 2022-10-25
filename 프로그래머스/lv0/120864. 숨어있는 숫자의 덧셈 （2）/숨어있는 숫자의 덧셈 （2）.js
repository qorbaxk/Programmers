const solution = (my_string) => {
    let regex = new RegExp('[^0-9]', 'g');
    let arr = my_string.replace(regex, ' ').split(' ').filter(x=>x!=="");
    arr = arr.map(Number);

    return arr.reduce((a,b)=>a+b,0);

 
}