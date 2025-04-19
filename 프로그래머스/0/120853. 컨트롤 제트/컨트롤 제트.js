function solution(s) {
  const stack = [];

  s.split(' ').forEach((item) => {
    if (item === 'Z') {
      stack.pop(); 
    } else {
      stack.push(Number(item)); 
    }
  });

  return stack.reduce((acc, cur) => acc + cur, 0);
}
