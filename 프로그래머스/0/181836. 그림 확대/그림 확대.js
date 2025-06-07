function solution(picture, k) {
  const answer = [];

  for (let row of picture) {
 
    const expandedRow = row
      .split('')
      .map(char => char.repeat(k))  // 가로 확대
      .join('');

    for (let i = 0; i < k; i++) {
      answer.push(expandedRow);
    }
  }

  return answer;
}
