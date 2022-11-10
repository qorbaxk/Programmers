const solution = (participant,completion) => {
    participant = participant.sort();
    completion = completion.sort();
    let answer;
    answer = participant.find((v,i)=>v!==completion[i])
    return answer;
}