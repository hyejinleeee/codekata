function solution(my_string, is_suffix) {
    let answer = 0;
    
 for(let i = 0; i < my_string.length; i++){
let answer = Number(my_string.slice(i,my_string.length) === is_suffix)
     
     if(answer){
         return 1
     }
 }
        
   return answer
}


