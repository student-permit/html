//object1.js

let obj ={}; // 객체(인스턴스)
obj = new Object();

obj.title = "이것이 자바다";
obj['price'] = 30000;

console.log(obj);

let today = new Date();
console.log(today.getFullYear()+'년도');

let numAry = [10, 20, 30]; // new Array();
numAry.push(40); // 제일 마지막 위치에 추가
numAry.unshift(5); // 제일 첫 번째 위치에 추가 현재 [5,10,20,30,40]
numAry.splice(1, 2, 13); //  splice 삭제 수정 추가가 가정한 method

console.log(numAry)