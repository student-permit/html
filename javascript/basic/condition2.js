/*condition2.js
입력받은 숫자 -> 2의 배수인지, 3의 배수인지
6 -> 2와 3의 배수입니다
4 -> 2의 배수입니다 9-> 3의배수입니다
*/
/*let firstNumber 
let frrstNumber = prompt("숫자를 입력하시오");

if (firstNumber % 2 == 0) {
  console.log(firstNumber +'은 2의 배수입니다');
} 
if (firstNumber % 3 == 0) {
  console.log(firstNumber + '은 3의 배수입니다');
} 
else{
  console.log(firstNumber + `은 2와 3의 배수입니다`)
}
  */

//else는 변수가 없다!

let anyNumber = parseInt(prompt("숫자를 입력하세요:"));

if (anyNumber % 2 == 0)
  if (anynumber % 3 == 0) {
    console.log(`2와 3의 배수입니다`);
  }
else
  console.log('2의 배수입니다');
else(anyNumber % 3 == 0) {
  console.log('3의 배수입니다.')
}
}