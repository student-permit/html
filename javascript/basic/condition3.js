/* condition3.js
2개의 숫자를 입력.
2개 짝수 -> "모두 짝수" 구문 출력
1개 짝수 -> 하나는 짝수 구문 출력
0개 -> 짝수는 없습니다 구문 출력
*/


let anyNumber1 = parseInt(prompt('숫자를 입력'));
let anyNumber2 = parseInt(prompt('숫자를 입력'));
if(anyNumber1 % 2 == 0 || anyNumber2 % 2 == 0)
  console.log("짝수");
