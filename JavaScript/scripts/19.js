document.addEventListener("DOMContentLoaded", () => {
    const collect1 = document.querySelectorAll(".bt1");
    const collect2 = document.querySelectorAll(".bt2");
    const collect3 = document.querySelectorAll(".bt3");
    const txt1 = document.querySelector('#txt1');
    const btReset =document.querySelector('#btReset');

    //배열의 초기화
    let arr = [];

    //reset기능 구현
    btReset.addEventListener('click', () =>{
        txt1.value =''
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
    for (let cbt2 of collect2) {
        cbt2.addEventListener('click', (e) => {
            e.preventDefault();
            switch (cbt2.textContent) {
                case '사과':
                    arr.push('');
                    break;
                case '바나나':
                    arr.push('')
                    break;
                case '오렌지':
                    arr.push('')
                    break;
                case '수박':
                    arr.push('')
                    break;
            }
        })
    }
    for (let cbt3 of collect3) {
        cbt3.addEventListener('click', () => {
            e.preventDefault();
            console.log(cbt3.textContent)
        })
    }
})