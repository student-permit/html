//whileloop3
//object 타입

//let myInfo = {}; //object.

let myInfo = {
  name: "홍길동",
  age: 20,
  height: 170,
  weight: 65
}; // object. 구분은 ,로 마지막에는 ,안해도 됨
console.log(myInfo);
console.log(`이름: ${myInfo.name}, 나이:${myInfo.age}`);
//for..in 반복문


let myFriend1 = {
  name: "홍길동",
  phone: "010-1111-2222",
  address: "대구 중구 100번지"
}

let myFriend2 = {
  name: "길동이",
  phone: "010-3333-4444",
  address: "대구 수성구 200번지"
}


let myFriend3 = {
  name: "박석민",
  phone: "010-3443-5555",
  address: "대구 수성구 200번지"
}

let friends = {myFriend1, myFriend2, myFriend3}
console.log(friends[0],name);
console.log(friends[1]['phone']);
console.log(friends[2]['address']);
for(let i=0; i<friends,length; i++) {
  //친구이름.
  console.log(`이름: ${friends[i].name}`), 연락처
}

//오류 많음