//function1.js

let numAry1 = [10, 20, 30];
let numAry2 = [40, 50, 60];
let numAry3 = [70, 80, 90];

// 기능정의.arraySum() -> 정의 구문에서는 변수.
function arraySum(numAry = []) {
  let sum = 0;
  for (let i = 0; i < numAry1.length; i++) {
    sum += numAry1[i];
  }
  console.log(`합계 : ` + sum)
}
//여기까지가 하나의 함수
// end of arraySum()

arraySum([10,20,30]); // 함수를 호출해서 실행할 때는 실제 값을 입력
arraySum(numAry2);