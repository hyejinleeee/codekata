function solution(hp) {
   
    let generalAnts = Math.floor(hp / 5); 
    let soldierAnts = Math.floor((hp - (generalAnts * 5)) / 3);
    let workerAnts = hp - ((generalAnts * 5) + (soldierAnts * 3));
    
    let totalAnts = generalAnts + soldierAnts + workerAnts;
    
    return totalAnts;
}
