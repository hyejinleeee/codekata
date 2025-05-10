function solution(myString, pat) {
  const lastIndex = myString.lastIndexOf(pat);
  return lastIndex !== -1 ? myString.slice(0, lastIndex + pat.length) : '';
}
