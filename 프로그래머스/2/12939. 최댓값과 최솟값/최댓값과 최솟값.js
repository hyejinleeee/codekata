function solution(s) {
    let numbers = s.split(' ').map(Number); 
    let max = Math.max(...numbers);         
    let min = Math.min(...numbers);         
    
    return `${min} ${max}`;  
}