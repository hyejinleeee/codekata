function solution(arr) {
    let sum = 0;     
    for(i=0; i < arr.length; i++){
        sum = sum + arr[i]
    } 
     let sol = sum / arr.length;
    return sol
}