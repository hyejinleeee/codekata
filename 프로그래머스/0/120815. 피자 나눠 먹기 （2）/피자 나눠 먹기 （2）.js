function solution(n) {
    let pieces = 6; // 피자 한 판의 조각 수
    let plates = 1; // 최소 피자 판 수

    // 모든 사람이 같은 조각을 먹을 수 있을 때까지 피자 판을 늘린다
    while ((pieces * plates) % n !== 0) {
        plates++;
    }

    return plates; // 최소 피자 판 수 반환
}
