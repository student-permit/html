//forloop4.js
//0 <= Math.random()*100 < 100 => 50부터 100
//학생 10명의 임의 점수를 배열에 저장.

let scores =[];
let sum = 0;
let max = 0;

for(let i = 0; i <10; i++) {
  scores[i] = parseInt(Math.random() * 51) + 50; // 50 <= x <= 100
  console.log(scores[i])
}

//평균
for (let i =0; i<10; i++) {
  sum += scores[i];
}
console.log(`평균: ${sum / 10}`)

//최고점수
for(let i =0; i<10; i++) {
  if(max < scores[i])
    max = scores[i];
}
console.log(`최고점수 : ${max}`);