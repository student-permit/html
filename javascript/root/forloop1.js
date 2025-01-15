//forloop1.js
let sum = 0;

//sum = sum +1;

//1~10까지 출력
for (let i = 1; i < 10; i++) {
  console.log(`현재 i의 값 :${i}`);
  if(i % 2 == 1){
  sum = sum +i;
  }
}
console.log(`1~10까지의 홀수 합 : ${sum}`);
console.log(`end of for`);

/*
for (let i = 1; i<10, i++) {
console.log(`현재 i의 값 :${1}`);
sum = sum +1;
}

consol.log(`sum의 결과값 ${sum}');
consol.log(`end of for')
*/