//condition5.js
// 두 수 : 1~100까지의 임의의 값 생성
//큰 수에서 작은 수를 빼서 결과값을 출력

/*
let num1 = parseInt(Math.random() * 100) + 1;
let num2 = parseInt(Math.random() * 100) + 1;
console.log(num1, num2);
let result = num1 - num2;
if (result < 0) {
  result = num2 - num1;
}
console.log(`큰 수에서 작은 수를 뺀 결과값: ${result}`);
*/


let num1 = parseInt(Math.random() * 100) + 1;
let num2 = parseInt(Math.random() * 100) + 1;
let num3 = parseInt(Math.random() * 100) + 1;

console.log(num1, num2, num3)

if (num1 > num2) {
  if(num1 > num3) { 
    result = num1;
} else {
  result = num3;
} 
} else {
  if (num2 > num3) {
    result = num2;
  } else {
    result = num3;
  }
}

console.log(`제일 큰 수 + ${result}`);