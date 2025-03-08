function solution(num, k) {
    let strNum = num.toString(); 
    let index = strNum.indexOf(k.toString());
    
    return index !== -1 ? index + 1 : -1; 
}
