function solution(array, n) {
   return array.reduce((closest, current) => {
        // 현재까지의 최적 값과 현재 값의 차이를 비교
        let diffClosest = Math.abs(closest - n);
        let diffCurrent = Math.abs(current - n);
        
        // 더 가까운 값을 선택하되, 차이가 같다면 작은 숫자를 선택
        if (diffCurrent < diffClosest || (diffCurrent === diffClosest && current < closest)) {
            return current;
        }
        return closest;
    });
}