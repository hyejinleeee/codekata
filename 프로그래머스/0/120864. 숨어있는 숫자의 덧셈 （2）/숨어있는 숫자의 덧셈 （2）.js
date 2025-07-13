function solution(my_string) {
  const numbers = my_string.match(/\d+/g); // 정규표현식으로 연속된 숫자 추출
  if (!numbers) return 0; // 숫자가 하나도 없는 경우
  return numbers.map(Number).reduce((a, b) => a + b, 0);
}