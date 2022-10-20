const solution = (my_string) => my_string.match(/[0-9]/g).sort((a,b)=>a-b).map(Number);
    
