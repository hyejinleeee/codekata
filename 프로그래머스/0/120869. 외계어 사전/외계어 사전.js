function solution(spell, dic) {
  return dic.some(word => 
    spell.every(ch => word.includes(ch)) && word.length === spell.length
  ) ? 1 : 2;
}