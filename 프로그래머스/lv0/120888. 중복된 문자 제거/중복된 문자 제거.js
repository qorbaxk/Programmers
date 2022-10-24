const solution = (my_string) => {
    my_string = [...my_string];
    const set = new Set(my_string);
    return [...set].join('');
}