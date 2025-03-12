function solution(my_string) {
 return my_string
        .split('')               // 문자열을 배열로 변환
        .filter(char => !isNaN(char) && char !== ' ')  // 숫자만 필터링
        .map(Number)             // 문자열 숫자를 정수로 변환
        .sort((a, b) => a - b);  // 오름차순 정렬
}