const solution = (my_string, num1, num2) => {
    let str1 = my_string[num1];
    let str2 = my_string[num2];
    
    return [...my_string].map((v,i)=>i===num1?v.replace(str1,str2):i===num2?v.replace(str2,str1):v).join('')
}