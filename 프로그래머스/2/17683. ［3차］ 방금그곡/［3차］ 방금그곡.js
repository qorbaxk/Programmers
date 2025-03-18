function solution(m, musicinfos){
    // # 인 부분을 소문자로 치환하는 함수
    const convertMelody = (melody) => {
        return melody
            .replace(/C#/g, 'c')
            .replace(/D#/g, 'd')
            .replace(/F#/g, 'f')
            .replace(/G#/g, 'g')
            .replace(/A#/g, 'a')
            .replace(/B#/g, 'b')
            .replace(/E#/g, 'e');
    };

    // 현재 타겟인 멜로디
    const targetMelody = convertMelody(m);
    // 조건일치 여러개일때 재생시간 확인하므로 해당값 처리
    let maxLength = 0;
    let answer = "(None)";

    for (let music of musicinfos) {
        const [start, end, title, code] = music.split(",");

        // 시작과 끝 시간을 분 단위로 변환
        const [sh, sm] = start.split(':').map(Number);
        const [eh, em] = end.split(':').map(Number);
        // 재생시간
        const diff = (eh * 60 + em) - (sh * 60 + sm);

        // 변환된 악보 정보
        let convertedCode = convertMelody(code);

        // 재생된 멜로디 만들기
        let playedMelody = convertedCode.repeat(Math.ceil(diff / convertedCode.length)).slice(0, diff);

        // 멜로디 포함 여부 체크
        if (playedMelody.includes(targetMelody)) {
            // 재생시간이 현재 최댓값보다 커야 제일 긴 재생시간이므로 이럴때만 갱신
            if (diff > maxLength) {
                maxLength = diff;
                answer = title;
            }
        }
    }

    return answer;
}