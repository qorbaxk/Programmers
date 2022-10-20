const solution = (my_string) => {
    let regex = new RegExp('[aeiou]','g')
    return my_string.replace(regex,'');
}