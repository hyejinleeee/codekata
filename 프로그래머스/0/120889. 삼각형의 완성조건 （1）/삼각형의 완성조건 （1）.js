function solution(sides) {

    const maxSide = Math.max(...sides);
    
    const sumOfOthers = sides.reduce((acc, side) => acc + side, 0) - maxSide;
    
    if (maxSide < sumOfOthers) {
        return 1;
    } else {
        return 2;
    }
}
