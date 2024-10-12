function solution(num_list) {
    let answer = [...num_list];
    let lastNumIndex = num_list.length -1
    let beforeLastNumIndex = num_list.length -2
    
    if(num_list[lastNumIndex] > num_list[beforeLastNumIndex]){
       answer.push(num_list[lastNumIndex]-num_list[beforeLastNumIndex]) 
    }else{
        answer.push(num_list[lastNumIndex]*2)
    }
    
    return answer;
}