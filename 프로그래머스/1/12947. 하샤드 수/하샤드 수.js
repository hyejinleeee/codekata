function solution(x) {
    
    const xString = x.toString();
    let xSum = 0;
    
    for (let i = 0; i < xString.length; i++) {
        xSum += parseInt(xString.charAt(i));
    }
    
    return x % xSum === 0?  true : false
        
      
}