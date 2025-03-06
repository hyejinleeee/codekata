function solution(numbers, direction) {
    if (direction === "right") {
        numbers.unshift(numbers.pop()); // 마지막 원소를 맨 앞에 추가
    } else {
        numbers.push(numbers.shift()); // 첫 번째 원소를 맨 뒤에 추가
    }
    return numbers;
}
