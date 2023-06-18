// 足し算
export function add(a: number, b: number) {
  const sum = a + b;
  
  // 100を超えたら100を返す
  if(sum > 100) {
    return 100;
  }
  return sum;
}
// add(1,2)

// 引き算
export function sub(a: number, b: number) {
  return a - b;
}
