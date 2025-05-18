function solution(my_string) {
    const result = new Array(52).fill(0);

    for (const char of my_string) {
        const code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            // 'A' ~ 'Z'
            result[code - 65]++;
        } else if (code >= 97 && code <= 122) {
            // 'a' ~ 'z'
            result[26 + code - 97]++;
        }
    }

    return result;
}