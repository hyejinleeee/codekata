function solution(n){     
     n += ''
    let sum = 0;
     for(let num of n){
        sum += +num 
     }
    return sum    
}