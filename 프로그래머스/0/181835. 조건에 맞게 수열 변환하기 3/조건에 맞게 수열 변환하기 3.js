function solution(arr, k) {

    let answer = [];
    
    for(let num of arr){
         if(k%2){
        answer.push(num*k)
    }else{
        answer.push(num+k)
    }
    }

    
    
    return answer;
}