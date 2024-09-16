function solution(num_list) {
    let product = 1;
    let sum = 0;
    
   for(let num of num_list){
       product *= num;
       sum += num;
   }
    
    if(product < sum * sum){
        return 1;
    }else{
        return 0;
    }
    
}