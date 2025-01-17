//exe.js

let numAry = [{name:'조카', age:10},
              {name:'큰조카', age:14},
              {name:'삼촌', age:31},
              {name:'큰아버', age:45},
              {name:'나', age:21}];

let filAry = numAry.filter(function (item, idx, ary) {
  if (item. age>20) {
    return true;
  }
  return false;
});
// 0번째 값은 10
// 1번째 값은 14
numAry.forEach(function (item, idx, ary) {
  console.log(item);
  if (item > 10) {
    console.log(`${idx}번째 값은 ${item}`);
  }
});