//exe1.js
let myFriends = [];
myFriends.push({name:"홍길동", escore: 70, kscore:78, gender : 'Female'});
myFriends.push({name:"신현욱", escore: 80, kscore:88, gender : 'Female'});
myFriends.push({name:"김민식", escore: 90, kscore:70, gender : 'Male'});
myFriends.push({name:"석지욱", escore: 95, kscore:55, gender : 'Female'});

let sum = 0;
let cnt = 0;
let avg = 0;


myFriends.forEach(function (item, idx, ary) {
  console.log(item.name);
});


myFriends.forEach(function (item, idx, ary) {
  if(item.gender == 'Female') {
    sum += item.escore;
    cnt++;
  }
});
avg = sum/cnt;
console.log(avg);

let underAvgAry = myFriends.filter(function (item, idx, ary) {
  if(item.gender == 'Female' && item.escore < avg) {
    return true;
  }
})

console.log(underAvgAry)