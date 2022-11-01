const solution = (quiz) => {
    let result = [];
    quizArr = quiz.map(x=>x.split('='));
    for(let i=0; i<quiz.length; i++){
        eval(quizArr[i][0]) === Number(quizArr[i][1]) ? result.push('O') : result.push('X');
    }
    return result;
}