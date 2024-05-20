function solution(phone_number) {
    
    // 마지막 4자리
    const lastFourDigits = phone_number.slice(-4);
    
    // 앞부분을 '*'로 변환
    const maskedPart = '*'.repeat(phone_number.length - 4);
    
    // 두 부분을 합쳐서 반환
    return maskedPart + lastFourDigits;
}