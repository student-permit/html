//function2.js
/*
함수 이름 : getMax
매개 변수 : 배열(numAry)
기능 : 배열의 요소 중에서 제일 큰 값을 콘솔에 출력
*/

let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = [];


for (let i=0; 1<i && i<10; i++) {
  ary3[i] = parseInt(Math.random() * 50);
}
console.log(ary3);

//매개변수로 받은 값 중 제일 큰 요소를 출력.
function getMax(numAry = []) {
  let max = 0; //제일 큰 값을 담아 놓을 변수 선언 - 배열을 다 비교하도록 반복문
  for (let i=0; i< numAry.length ; i++) {
    if (max < numAry[i]) {
      max = numAry[i];
    }
  }
 // console.log(`최대값은 ${max}`);
 return max; // 함수를 호출한 영역으로 반한.
} // end of getMax()

document.write(getMax(ary1))
alert(getmax(ary2))
getMax(ary3);

