function solution(id_pw, db) {
    const [inputId, inputPw] = id_pw;

    for (let [id, pw] of db) {
        if (id === inputId) {
            return pw === inputPw ? "login" : "wrong pw";
        }
    }

    return "fail";
}
