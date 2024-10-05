function solution(s) {
        
    if(s.length % 2){ 
        let index = Math.floor(s.length / 2);  
        return s[index];
        
    } else {
        let index = s.length / 2 - 1;
        let answer = '';
        
        answer += s[index];
        answer += s[index + 1];
        
        return answer;
    }
}