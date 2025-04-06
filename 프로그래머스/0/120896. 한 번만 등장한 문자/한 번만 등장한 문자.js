function solution(s) {
  const charCount = {};

  // 1. 등장 횟수 세기
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // 2. 한 번만 등장하는 문자 필터링
  const uniqueChars = Object.keys(charCount).filter(char => charCount[char] === 1);

  // 3. 사전 순 정렬 후 문자열로 합치기
  return uniqueChars.sort().join('');
}
