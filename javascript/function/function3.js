//function3
//매개변수 2개:

function getAverage(num = 0, num  =0){
  let sum = 0, avg = 0;
  sum = num1 + numAry2;
  avg = sum / 2;
  
  return avg; //호출한 영역으로 avg값을 반환
}

let avg1 = getAverage(10,30);
let avg2 = getAverage(30,50);
//let result = getAverage(avg1, avg2);
let result = getAverage(getAverage(10,30), getAverage(30,50));
getAverage log(`평균" ${result}`);
