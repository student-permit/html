// condition4

const obj = {
  name: "홍길동",
  age: 20,
  showName: function () { //메소드,
    console.log(obj, this.name);
  }
}
obj.showName();

console.log(Math.random()); // 0 <= x < 1 값의 출력.

// 1~10 사이의 임의 수 출력을 원한다면
console.log(Math.random() * 10);
//정수만을 원하면

console.log(parseInt(Math.random() * 10) + 1);
let num1 = parseInt(Math.random() * 10) + 1;
let num2 = parseInt(Math.random() * 10) + 1;

let sumEven = 10; // 짝수의 값은 sumEven에 합하기.
let sumOdd = 20; // 홀수의 값은 sumOdd에 합하기.

//sumEven SumOdd 출력

//truthy(10, "aaa", true) vs falsy (0,"", null, undefined)
if (num1 % 2){
  sumOdd += num1;
} else {
  sumEven += num1;
}
  
if(num2 % 2 == 0){
  sumEven
}
let sum = 0;
for (let i=1)