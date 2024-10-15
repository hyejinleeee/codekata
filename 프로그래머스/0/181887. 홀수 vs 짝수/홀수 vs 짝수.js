function solution(num_list) {
    let sumOfOdd = 0;
    let sumOfEven = 0;
    
    for(let i = 0; i < num_list.length; i++){
        if(i%2){
            sumOfOdd += num_list[i]
        }else {
            sumOfEven += num_list[i]
        }
    }
    
    return  sumOfOdd > sumOfEven ? sumOfOdd : sumOfEven;
}