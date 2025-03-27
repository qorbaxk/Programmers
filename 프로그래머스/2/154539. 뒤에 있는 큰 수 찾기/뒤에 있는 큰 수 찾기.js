function solution(numbers) {
    const result = Array(numbers.length).fill(-1);
    const stack = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        // 스택에 자기보다 작거나 같은 값이 있으면 제거 (쓸모 없음)
        while (stack.length && stack[stack.length - 1] <= numbers[i]) {
            stack.pop();
        }

        // 스택이 비지 않았다면, 그게 바로 뒷 큰 수
        if (stack.length) {
            result[i] = stack[stack.length - 1];
        }

        // 현재 숫자를 스택에 추가 (뒤의 애들한테는 얘가 후보가 될 수 있음)
        stack.push(numbers[i]);
    }

    return result;
}