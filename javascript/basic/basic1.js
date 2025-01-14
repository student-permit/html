// basic1.js
/*
변수선언 : 이름, 연락처, 주소 선언
console 출력
*/ 

    let myName= "Ljw";
    let myNumber= "01021916991";
    let myAddress= "Daegu";

    let largeNumber = 10000000000n;
    console.log(largeNumber);


    const bloodType = "O";
    // bloodType = 'A'; const <-- 상수(값을 바꿀 수 없음)

    const PI = 3.14;
    //원주율은 고정 값 - 이럴 때 상수 사용


  let myInfo ={
    name : "홍길동",
    age : 20
  };
  
  let scores = [10,20,30]; //배열.
  //let specialType; //단지 변수만 선언한 것
  let specialType = null; //null 아무것도 없는

  console.log(typeof specialType)

    myName = '홍길동'


    console.log("내 이름은" + myName + "입니다")
    console.log("연락처는" + myNumber + "입니다")
    console.log(`주소는 ${myAddress}입니다`)
// " ' ` 모두 사용가능

    console.log("myName == LJW");
    console.log(myNumber == "01021916991");
    console.log(myAddress == "Daegu")

    console.log('반지름 5인 원의 넓이는 ${5*5*PI}입니다.');

    console.log(typeof myName); //변수의 자료형을 출력
    console.log(typeof largeNumber);
    console.log(typeof (PI==3)); 
    // 비교연산자는 == 2개