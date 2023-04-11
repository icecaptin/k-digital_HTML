// function show() {
//   //   alert("TA-DA!");
//   event.preventDefault(); //form이 잇어도 강제로 부르지 않으려면
//   document.getElementById("h2_id").innerHTML = "TA-DA!";
// }



// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("h2_id").innerHTML = "시작입니다.";
// });

const show = () => {
  event.preventDefault();
  let rn = Math.floor(Math.random() * 6) +1; //랜덤수 생성
  console.log(rn);
  document.getElementById("h_div").innerHTML = '<img src ="../JavaScript/dice/'+rn+'.png">';
  // document.getElementById("h_div").src = '<img src ="../JavaScript/dice/${rn}.png">';
}


// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("h2_id").innerHTML = "TA?";
// });
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("h2_id").innerHTML = "TA?";
//   document.querySelector('#h_div').innerHTML = "아이디선택자: 시작임다."
//   const bt = document.createElement('button');
//   document.getElementById('h_div').append(bt);
//   bt.textContent = "확인";
// });