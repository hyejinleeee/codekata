function solution(emergency) {
  // 응급도를 정렬해서 높은 순위부터 순위 매기기
  const sorted = [...emergency].sort((a, b) => b - a); // 내림차순

  // 원래 숫자가 몇 등인지 찾아서 매핑
  return emergency.map((num) => sorted.indexOf(num) + 1);
}
