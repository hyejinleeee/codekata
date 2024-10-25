function solution(myString, pat) {
   
    let convertedString = "";
    
    for(let char of myString){
        if(char==="A"){
            convertedString += "B"
        }else{
            convertedString += "A"
        }
    }
    
    return convertedString.includes(pat) ?  1:  0
    
 
}