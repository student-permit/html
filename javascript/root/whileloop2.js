//whileloop2.js
//stop을 입력하면 반복문 종료
//입력한 값 중에서 제일 큰 값을 출력

/*
let inputValue = prompt("점수를 입력하세요")
console.log(inputValue)

let i = 0
for(let i =0; i<10; i++)
let max = 0; {
  if(max < scores[i])
    max = scores[i];
}
console.log(`최고점수 : ${max}`);
*/

/*
let run = true;
let max = 0;
while(run){
  let inputValue = prompt("점수를 입력");
  if(inputValue >= '100') {
    run = false;
  } else {
    let score = parseInt(inputValue);
    if (max < inputValue) {
      max = inputValue
    }
  }
}
//end of while.

console.log(`최고점수 : ${max}`);
*/

let scores = [];
let run = true;

while(run) {
  let inputValue = prompt("100점 이상이며 종료")
  let scores = parseInt(inputValue)
}