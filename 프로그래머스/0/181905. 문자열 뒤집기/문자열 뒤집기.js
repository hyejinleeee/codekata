function solution(my_string, s, e) {
  const before = my_string.slice(0, s);
  const toReverse = my_string.slice(s, e + 1).split('').reverse().join('');
  const after = my_string.slice(e + 1);
  return before + toReverse + after;
}