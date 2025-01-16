//function5.js : 메소드
//this : object일 때 object자신을 가리킴

let obj = {
  name: "홍길동",
  birth: "1998-05-01",
  bloodType: "O",
  showInfo: function() {
    console.log(`이름은 ${this.name}, 생일은 ${this.birth} 입니다`)
  },
  addNumber: function (num1 = 0, num2 = 0) {
    return num1 +num2;
  },
  calculateFnc: function (num1 =0, num2 = 0, calFnc) {
    return calFnc(num1,num2);
  }
}
obj.showInfo();
//alert(obj.addNumber(10,12));
let result = obj.calculateFnc(10,5, function(a,b) {
  return a-b;
})
result = (obj.addNumber(10,12));

function addSum(num1, num2) {
  return num1 + num2;
}

console.log(`결과값: ${result}`);