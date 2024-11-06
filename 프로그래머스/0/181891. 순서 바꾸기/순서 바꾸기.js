function solution(num_list, n) {
 let afterN = num_list.slice(n,num_list.length)
 let beforN = num_list.slice(0,n)
 const combinedWithSpread = [...afterN, ...beforN];
 return combinedWithSpread
}