document.addEventListener("DOMContentLoaded", () => {
  const collect1 = document.querySelectorAll(".bt1"); //사과오렌지 이모지 추가
  const collect2 = document.querySelectorAll(".bt2"); //사과오렌지 이모지 삭제
  const collect3 = document.querySelectorAll(".bt3"); //사과->당근 이모지 변경
  const collect4 = document.querySelectorAll(".bt4"); //당근오이 이모지 삭제
  const collect5 = document.querySelectorAll(".bt5"); //당근오이 이모지 생성
  const collect6 = document.querySelectorAll(".bt6"); //당근->사과 이모지 변경
  const txt1 = document.querySelector('#txt1'); // input txt1
  const btReset = document.querySelector('#btReset'); //취소버튼

  //배열의 초기화
  let arr = [];

  //reset기능 구현
  btReset.addEventListener('click', () => {
    txt1.value = ''
    arr = [];
  })
  //버튼이벤트 추가


  for (let cbt1 of collect1) {
    cbt1.addEventListener('click', (e) => {
      e.preventDefault();
      switch (cbt1.textContent) {
        case '사과':
          arr.push('🍎');
          break;
        case '바나나':
          arr.push('🍌')
          break;
        case '오렌지':
          arr.push('🍊')
          break;
        case '수박':
          arr.push('🍉')
          break;
      }
      console.log(arr);
      txt1.value = arr.toString();
      txt1.value = arr.join('');
    })
  }
  // for (let cbt2 of collect2) {
  //     cbt2.addEventListener('click', (e) => {
  //         e.preventDefault();
  //         switch (cbt2.textContent) {
  //             case '사과삭제':
  //                 arr.splice(arr.indexOf('🍎'), 1);
  //                 break;
  //             case '바나나삭제':
  //                 arr.splice(arr.indexOf('🍌'), 1);
  //                 break;
  //             case '오렌지삭제':
  //                 arr.splice(arr.indexOf('🍊'), 1);
  //                 break;
  //             case '수박삭제':
  //                 arr.splice(arr.indexOf('🍉'), 1);
  //                 break;
  //         }
  //         console.log(arr);
  //         txt1.value = arr.join('');
  //     })
  // }

  for (let cbt3 of collect3) {
    cbt3.addEventListener('click', () => {
      switch (cbt3.textContent) {
        case '사과 -> 당근':
          arr = arr.map(item => item == '🍎' ? '🥕' : item);
          break;
        case '바나나 -> 오이':
          arr = arr.map(item => item == '🍌' ? '🥒' : item);
          break;
        case '오렌지 -> 아보카도':
          arr = arr.map(item => item == '🍊' ? '🥑' : item);
          break;
        case '수박 -> 브로콜리':
          arr = arr.map(item => item == '🍉' ? '🥦' : item);
          break;
      }
      console.log(arr);
      txt1.value = arr.join('');
    })
  }
  for (let cbt6 of collect6) {
    cbt6.addEventListener('click', () => {
      switch (cbt6.textContent) {
        case '당근 -> 사과':
          arr = arr.map(item => item == '🥕' ? '🍎' : item);
          break;
        case '오이 -> 바나나':
          arr = arr.map(item => item == '🥒' ? '🍌' : item);
          break;
        case '아보카도 -> 오렌지':
          arr = arr.map(item => item == '🥑' ? '🍊' : item);
          break;
        case '브로콜리 -> 수박':
          arr = arr.map(item => item == '🥦' ? '🍉' : item);
          break;
      }
      console.log(arr);
      txt1.value = arr.join('');
    })
  }

  //갓갓 챗GPT가 만들어준거 '각각의 과일만 삭제되게끔 만든것'
  for (const cbt of [...collect1, ...collect2, ...collect3]) {
    cbt.addEventListener('click', (e) => {
      e.preventDefault();
      const btnText = cbt.textContent;
      switch (btnText) {
        case '사과삭제':
          arr = arr.filter(x => x !== '🍎');
          break;
        case '바나나삭제':
          arr = arr.filter(x => x !== '🍌');
          break;
        case '오렌지삭제':
          arr = arr.filter(x => x !== '🍊');
          break;
        case '수박삭제':
          arr = arr.filter(x => x !== '🍉');
          break;
        default:
          console.error('Unknown button text');
          break;
      }
      console.log(arr);
      txt1.value = arr.join('');
    })
  }

  //갓갓 챗GPT가 만들어준거 '각각의 과일만 삭제되게끔 만든것'
  for (let cbt5 of collect5) {
    cbt5.addEventListener('click', (e) => {
      e.preventDefault();
      switch (cbt5.textContent) {
        case '당근':
          arr.push('🥕');
          break;
        case '오이':
          arr.push('🥒')
          break;
        case '아보카도':
          arr.push('🥑')
          break;
        case '브로콜리':
          arr.push('🥦')
          break;
      }
      console.log(arr);
      txt1.value = arr.toString();
      txt1.value = arr.join('');
    })
  }
  for (const cbt of [...collect1, ...collect2, ...collect3, ...collect4]) {
    cbt.addEventListener('click', (e) => {
      e.preventDefault();
      const btnText = cbt.textContent;
      switch (btnText) {
        case '당근삭제':
          arr = arr.filter(x => x !== '🥕');
          break;
        case '오이삭제':
          arr = arr.filter(x => x !== '🥒');
          break;
        case '아보카도삭제':
          arr = arr.filter(x => x !== '🥑');
          break;
        case '브로콜리삭제':
          arr = arr.filter(x => x !== '🥦');
          break;
        default:
          console.error('Unknown button text');
          break;
      }
      console.log(arr);
      txt1.value = arr.join('');
    })
  }



})