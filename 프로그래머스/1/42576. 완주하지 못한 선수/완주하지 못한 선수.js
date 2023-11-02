function solution(participant, completion) {
    const participantObj = {}

    participant.forEach(human=>{
        if(participantObj[human] === undefined){
            participantObj[human] = 1
        }
        else{
            participantObj[human]++
        }
    })

    completion.forEach(human=>{
        participantObj[human]--
        if(participantObj[human] === 0)
            delete participantObj[human]
    })

    const answer = Object.keys(participantObj)[0]
    return answer;
}