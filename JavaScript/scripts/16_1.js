//onclick 없이 하는방법

document.addEventListener("DOMContentLoaded", () => {
  const prbt = document.querySelector("#prbt");

  prbt.addEventListener("click", () => {
    event.preventDefault();

    //랜덤수 생성
    let n = Math.floor(Math.random() * 6) + 1;

    //레디오버튼값 가져오기
    let yang;
    const radios = document.querySelectorAll("input[type=radio]");

    // 숫자 매칭
    for (let item of radios) {
      if (item.checked) {
        yang = item.value;
        break;
      }
    }

    //Correct Fail 출력
    if (n === parseInt(yang)) {
      document.querySelector("article h3").textContent = "Correct";
    } else {
      document.querySelector("article h3").textContent = "Fail";
    }

    //주사위 사진 표시 및 로그
    document
      .querySelector(".h2Class > img")
      .setAttribute("src", `./dice/${n}.png`);
    console.log(n);
    console.log(yang);
  });
});
