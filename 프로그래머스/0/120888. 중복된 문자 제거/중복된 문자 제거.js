function solution(my_string) {
  let result = '';
  for (let char of my_string) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}