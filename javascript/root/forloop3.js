//forloop3.js
let score1 = 90;
let sum = 0;

let numAry =[10, 20, 30, 40]; //배열생성.
numAry[4] = 50;
numAry[5] = 60;
numAry[7] = 70;
numAry[6] = 80;
console.log(numAry,length);

// 6번째 위치값(60)을 7번째로 이동
// 7번째 위치값(70)을 6번째로 이동

let temp = numAry[6]
numAry[6] = numAry[5]

/*let pos = 1;
let temp = numAry[pos +1];
numAry[pos +1] = numAry[pos];
numAry[pos] = temp;
*/

for (let i = 0; i < numAry.length; i++){
 console.log(`${i}번째의 값=>${numAry[i]}`);
}
//console.log(numAry);

console.log(numAry[0])