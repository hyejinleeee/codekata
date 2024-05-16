function solution(num) {
  let count = 0;
  let newnum = num;
  while (newnum > 1) {
    if (newnum % 2 === 0) {
      newnum = newnum / 2;
    } else {
      newnum = newnum * 3 + 1;
    }
    count++;
  }
    if(count>=500){
        return -1
    }else {return count;}
}
