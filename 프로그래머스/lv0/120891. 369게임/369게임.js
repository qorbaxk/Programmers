const solution = (order) => {
    let game = ['3','6','9'];
    let number = order.toString().split('');
    return number.filter(x=> game.includes(x)).length;
    
}