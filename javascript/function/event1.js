//event1.js

let item = document.querySelector('button');
item.addEventListener('click', function() {
  let n1=document.querySelector('#num1').valueAsNumer;
  let n2=document.querySelector('#num2').valueAsNumer;
  console.dir(n1 + n2);
  //document.querySelector(`#result`)['value']=n1+n2; 로 하거나
  document.querySelector(`#result`).value = n1+n2;
});