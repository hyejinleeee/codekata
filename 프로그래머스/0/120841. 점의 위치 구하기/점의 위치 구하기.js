function solution(dot) {
    // dot[0]은 x좌표, dot[1]은 y좌표
    const [x, y] = dot;

    let answer = 0;

    // x, y 좌표 값에 따라 사분면 판별
    if (x > 0 && y > 0) {
        answer = 1; // 1사분면 (양, 양)
    } else if (x < 0 && y > 0) {
        answer = 2; // 2사분면 (음, 양)
    } else if (x < 0 && y < 0) {
        answer = 3; // 3사분면 (음, 음)
    } else if (x > 0 && y < 0) {
        answer = 4; // 4사분면 (양, 음)
    }

    return answer;
}
