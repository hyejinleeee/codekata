function solution(num_list) {
  if(num_list.length >= 11) {
     return num_list.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }else{
    return num_list.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }

}