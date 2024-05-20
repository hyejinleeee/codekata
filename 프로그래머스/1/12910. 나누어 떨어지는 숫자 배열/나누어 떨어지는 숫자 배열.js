function solution(arr, divisor) {
    var answer = arr.filter(i => i % divisor === 0);
    
    // 필터된 결과가 비어있는 경우 -1을 배열에 추가합니다.
    if (answer.length === 0) {
        answer.push(-1);
    }
    
    // 배열을 오름차순으로 정렬합니다.
    return answer.sort((a, b) => a - b);
}