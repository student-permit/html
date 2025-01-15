/*whileloop4
member_id" "user01", memeber_name: "홍길동", point: 80
member_id" "user02", memeber_name: "신현욱", point: 90
member_id" "user03", memeber_name: "김민식", point: 85
*/
let members=[];

members[0] = {member_id: "user01", member_name: "홍길동", point:80}
members[1] = {member_id: "user02", member_name: "신현육", point:90}
members[2] = {member_id: "user03", member_name: "김민식", point:95}

let max = 0;
for(let i=0; i < members,length; i++) {
 /* if (max < members[i]['point']) {
    max = members[i]['points'];
    maxid = members[i]['member_id'];
  }
    */
   //위의 것 또는
   if(max.point < members[i]['point']) {
    max = members[i];
    //maxid = members[i]['member_id'];
   }
}
console.log(`최고point : ${"max"}, ${"maxID"}`);
members[0][`point`]