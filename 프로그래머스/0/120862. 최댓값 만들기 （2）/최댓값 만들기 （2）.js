function solution(numbers) {
    let maxNum = 0;
    
  if (numbers.length === 2) {
    return numbers[0] * numbers[1]; 
}

    
   for (let i = 0; i <= numbers.length; i++) {   
  for (let j = 0; j <= numbers.length; j++) { 
      
      let comparisonNum = numbers[i]*numbers[j]
      
      if(i !== j){
           if(maxNum <= comparisonNum){
          maxNum = comparisonNum
      }
      }
     
  }
        
} 
    return maxNum;
}




