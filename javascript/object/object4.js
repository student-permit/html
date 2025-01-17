//object4.js
// 달력을 만들려면 1일의 요일, 막날을 알아야
// 월은 0에서 부터 시작. 1월은 0, 2월은 1, ..

let month = 2;
let date = 12;
let year = 2024;

let today = new Date();
today.setFullYear(year);
today.setMonth(month);
today.setDate(date);

today = new Date(2024,4,5,15,30,22)
// console.log(today, today.getDay(), today.getMonth())

today = new Date()
let now = new Date();
console.clear();
console.log(today. getTime());

console.log(new Date(now));
console.log(today.valueOf() == now.valueOf());

// 2022년 5월
today.setFullYear(2022);
today.setMonth(4);
console.log(today);