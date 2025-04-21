function solution(order) {
  let total = 0;

  for (let item of order) {
    if (item.includes("cafelatte")) {
      total += 5000;
    } else {
      // americano 또는 anything
      total += 4500;
    }
  }

  return total;
}
