//forloop2.js
//1~10까지 짝수값을 구하는 반복.

//document.write(`<table border="1">`);
//document.write(`<tbody>`);

let html = '';
html += '<table border ="1">';
html += '<tbody>';

for (let i = 1; i<=9; i++) {
  if(i % 2 ==1)
    html += <tr><td style = 'background-color: yellow;'>2 +${1}=${2*i} </td></tr>
  else
    html +='<tr><td>2 * ${1}'
  html += '</tbody>';
  document.write(`<tr>`);
  document.write(`<td>2* ${i}} = ${2*i}</td>`);
  document.write(`</tr>`);
}
document.write(`<tr>`);
document.write(`<td>2*i = {2*1}</td>`);
document.write(`</tr>`);

//교재 p541
