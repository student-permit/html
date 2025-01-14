//basuc3.js
/*
두 숫자를 입력 받아서 두 수의 곱을 출력
*/
let firstValue = parseInt(prompt("첫 번째 값을 입력하세요: "));
let secondValue = prompt("두 번째 값을 입력하세요: ");
firstValue = firstValue *3; //parseInt(firstValue) + 1;
secondValue = --secondValue; //parseInt(secondValue) -1;
//console.log(firstValue, secondValue);


let result = ++firstValue * --secondValue;

console.log(`${firstValue}와 ${secondValue}의 곱은 ${result}`);

//두 숫자를 입력받아서 두 수의 곱을 출력
//첫 번째 값에 5의 값을 더하고, 
