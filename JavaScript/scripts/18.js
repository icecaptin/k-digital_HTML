//회문 체크 함수
const palindrome = (typename, resultbox) => {
    let typen = typename.value;
    if (typen.length == 0) {
        document.querySelector('h3').textContent= 'Put the Text'
        return;
    }
    else{
        document.querySelector('h3').textContent = ''
    }
    
    //입력 내용이 잇는 경우 1st 방법
    let reverse = '';
    // for (let i = typen.length -1; i >= 0; i--) {
    //     reverse = reverse + typen[i] ;
    //     console.log(reverse, typen);
    // }
    //배열로 이용하는 방법 2nd
    typen = typen.split(''); //문자열.split() 문자열을 분리자로 분리해서 배열만듬
    typen = typen.reverse(); //배열.reverse() 배열의 요소를 뒤집기
    reverse = typen.join(''); //배열.join() 배열의 요소를 문자열로 묶어줌
    console.log(typen, reverse);
    //회문판별
    if (typename.value == reverse) {
        resultbox.value = "palindrome";
    }else{
        resultbox.value = "not palindrome";
    }
    
}



//숫자합계
const numSum = (typename, resultbox) => {
    let rs = typename.value;
    if (rs.length == 0) {
        resultbox.value = 0;
        return;
    }
    let sum = 0;
    for(let ch of rs) {
        console.log(ch, isNaN(ch));
        if (!isNaN(ch) && ch !== ' ') sum = sum + parseInt(ch);
    }
    resultbox.value = rs.length;
}

document.addEventListener("DOMContentLoaded", () => {
    //DOM요소 가져오기
    const typename = document.querySelector("#typename");
    const resultbox = document.querySelector("#resultbox");

    const buttons = document.querySelectorAll(".bt");

    //버튼배열의 클릭 이벤트 작성
    for (let bt of buttons) {
        bt.addEventListener('click', (event) => {
            // let division = bt.innerHTML;
            let division = bt.getAttribute('id').slice(-1);
            if (division == 1) {palindrome(typename,resultbox);}
            //if (division === '1') palindrome(); Data type 까지 확인하려면
            else {numSum(typename, resultbox);}
        })
    }
    typename.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Enter키 기본 동작 방지
          document.querySelector("#submit").click(); // 클릭 이벤트 발생
        }
    });
});