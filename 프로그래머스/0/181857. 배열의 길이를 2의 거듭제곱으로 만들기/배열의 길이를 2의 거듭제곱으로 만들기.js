function solution(arr) {
  const len = arr.length;
  let power = 1;

  while (power < len) {
    power *= 2;
  }

  const zerosToAdd = power - len;
  return [...arr, ...Array(zerosToAdd).fill(0)];
}
