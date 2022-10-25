const solution = (emergency) => {
    let emg = [...emergency].sort((a,b)=>b-a);
    return emergency.map(x=>emg.indexOf(x)+1);
}