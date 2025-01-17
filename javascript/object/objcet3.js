//object3.js
//forEach()
let numAry = [20, 13, 45, 62, 19];
let sum = 0;
numAry.forEach(function (item, idx, ary) {
  sum += item;
  console.log(`item-> ${item}`);
  console.log(`idx->${idx}`);
  console.log(`ary->${ary}`);
if (idx %2 ==0){
  console.log(`item -> ${item}`)
  sum += item;
}
//큰값
let max = 0;
if (max < item) {
  max = item;
}
console.log()

});
console.log(`짝수의 합계 ${sum}`);
//filter(funtion(item,idx,ary) {}조건을 만족하는 배열생성)
let filterAry = numAry.filter(function(item, idx, ary){
  if(item % 2 == 1){
    return true;
  } else {
    return false;
  }
});
console.log(filterAry)