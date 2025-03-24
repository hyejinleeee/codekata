function solution(age) {
  const alphabet = 'abcdefghij';
  return age
    .toString()
    .split('')
    .map(digit => alphabet[parseInt(digit)])
    .join('');
}