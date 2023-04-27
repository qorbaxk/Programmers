function solution(price) {
    return price>=500000?parseInt(price*0.8):price>=300000?parseInt(price*0.9):price>=100000?parseInt(price*0.95):price
}