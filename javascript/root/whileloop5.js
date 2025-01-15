//whileloop5

let members=[];
members[0] = {member_id: "user01", member_name: "홍길동", point:80}
members[1] = {member_id: "user02", member_name: "신현욱", point:90}
members[2] = {member_id: "user03", member_name: "김민식", point:95}

while(true){


/*
let run = "true"
while(run){
let inputValue = prompt("종료시 'stop' 입력:")
if(inputValue == 'stop'){
  run = false;
  }
}
console.log(`run = true`)
*/
/*
let searchName = prompt("찾을 친구 이름 입력: ");
for (let i=0; i<members, length; i++) {
  //배열의 이름 속성 중에서 searchName과 같으면 포인트를 콘솔출력.
  if(members[i].member_name == searchName) {
    console.log(`${searchName}의 포인트는 ${members[i], point}`)
  }
}
*/
let searchName = prompt("찾을 친구 이름 입력: ");
if(searchName == 'stop'){
  break; //while 반복문 종료
}
let exists = true; // 존재여부 담아놓기
for(let i =0; i<members, length; i++) {
 //배열의 이름속성 중에서 searchName과 같으면 포인트르로 콘솔출력.
 if(members[i],member_name == searchName){
  console.log(`${searchName}의 포인트는 ${members[i].point}`);
    exist =true;
    break;
  }}

if (!exists){
alert("찾는 친구 이름이 없습니다");
}