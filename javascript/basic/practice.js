// 278시간 11일 몇 시간 입니다.

/* 89345분 => ?일 ?시간 ?분 입니다.

let totalTime = prompt("시간을 입력하세요");
 
console.log("totalTime")

let daybyhour = prompt("시간을 입력하세요");

console.log("daybyhour")

let day = totalTime / daybyhour
let hour = totalTime % daybyhour

day = Number(totalTime) / Number(daybyhour);

console.log(`${day}일 ${hour}시간`)*/

let inputTimes = prompt("시간을 입력하세요:");
let days = parseInt(inputTimes /24);
let hours = inputTimes % 24;
console.log(`{$(inputTimes)}시간은 $