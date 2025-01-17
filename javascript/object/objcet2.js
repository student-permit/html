//object2.js
//concat (배열요소를 합칠 때)

let numAry1 = [10, 20]
let numAry2 = [30, 40]
let resultAry = numAry1.concat(numAry2)

console.log(resultAry.join('-').split('-'));
//join -> 배열을 문자열로 변화
//split -> 문자열을 베열로 변화

let result = resultAry.join('-').split('-');
result.push('60'); // unshift
console.log(result.pop()); //shift

console.log(result.indexOf('200')); // 요소의 인덱스 반환.

console.clear();
result = ["홍길동", "김민수", "허성식", "박창식"]

if(result.indexOf('김민수') != -1){
  console.log("찾는 이름이 존재합니다");
} else{
  console.log("찾는 이름이 없습니다");
}

console.log(result.at(2)); // 인덱스에 해당하는 값을 반환.

result.sort().reverse().join();
console.log(result);