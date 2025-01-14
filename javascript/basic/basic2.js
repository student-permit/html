//basic2.js

let anyVal = prompt("값을 입력하세요:");
// prompt 함수 - 창을 띄워주는 기능 - 
let anyVal12 = prompt("값을 입력하세요");

let result = anyVal + anyVal12
result = Number(anyVal) + parseInt(anyVal12);
  //parseInt 문자열을 정수로 변환하는 함수
console.log(`두 수의 합은 ${result}입니다`);