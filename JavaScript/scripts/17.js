document.addEventListener("DOMContentLoaded", () => {
  const selcc = document.querySelector("#selcc");
  const selff = document.querySelector("#selff");
  const celsius = document.querySelector("#tc1");
  const fahrenheit = document.querySelector("#tf2");
  const div1 = document.querySelector("#d1");
  const div2 = document.querySelector("#d2");

  //단위 표시
  div1.textContent = selcc.value;
  div2.textContent = selff.value;

  selcc.addEventListener("change", (e) => {
    div1.textContent = selcc.value === "celsius" ? "°C" : "°F";
    reSult();
  });

  selff.addEventListener("change", (e) => {
    div2.textContent = selff.value === "celsius" ? "°C" : "°F";
    reSult();
  });

  //변환
  function reSult() {
    if (selcc.value === "°C" && selff.value === "°F") {
      const celsiusTemp = parseFloat(celsius.value);
      const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
      fahrenheit.value = fahrenheitTemp.toFixed(2);
    } else if (selff.value === "°F" && selcc.value === "°C") {
      const fahrenheitTemp = parseFloat(fahrenheit.value);
      const celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
      celsius.value = celsiusTemp.toFixed(2);
    }
  }

  // 입력값이 변할 때마다 숫자나오게끔
  selcc.addEventListener("input", reSult);
  selff.addEventListener("input", reSult);
  celsius.addEventListener("input", reSult);
  fahrenheit.addEventListener("input", reSult);
});