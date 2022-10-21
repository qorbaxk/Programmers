const solution = (array) => {
    array = array.toString().split('');
    return array.filter(x=>x==='7').length;
}