function solution(str_list) {
  const lIndex = str_list.indexOf('l');
  const rIndex = str_list.indexOf('r');

  if (lIndex === -1 && rIndex === -1) return [];

  if (lIndex !== -1 && (rIndex === -1 || lIndex < rIndex)) {
    return str_list.slice(0, lIndex);
  } else {
    return str_list.slice(rIndex + 1);
  }
}
