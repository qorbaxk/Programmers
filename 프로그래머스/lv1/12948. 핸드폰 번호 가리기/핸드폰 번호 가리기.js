const solution = (phone_number) => {
    let realNum = phone_number.substr(phone_number.length-4);
    let star = '*'.repeat(phone_number.length-4);
    return star+realNum;
}