document.addEventListener("DOMContentLoaded", () => {
    const selcc = document.querySelector("#selcc"); //from
    const selff = document.querySelector("#selff"); //to
    const celsius = document.querySelector("#celsius");
    const fahrenheit = document.querySelector("#fahrenheit");
    const div1 = document.querySelector("#div1");
    const div2 = document.querySelector("#div2");
  
    //단위 표시
    div1.textContent = selcc.value;
    div2.textContent = selff.value;

    selcc.addEventListener("change", (e) => {
        selcc.innerHTML = e.target.value;
        selcc = e.target;
        reSult();
    })

    selff.addEventListener("change", (e) => {
        selff.innerHTML = e.target.value;
        selff.e.target;
        reSult();
    })

    div1.addEventListener("div1", () => {
        reSult();
    })

    //변환
    function reSult() {
      if (selcc.value === "°C" && selff.value === "°F") {
        const celsiusTemp = parseInt(celsius.value);
        const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
        fahrenheit.value = fahrenheitTemp.toFixed(2);
      } else if (selff.value === "°F" && selcc.value === "°C") {
        const fahrenheitTemp = parseInt(fahrenheit.value);
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
  
  //20230412_select 바꿔서 오기


// document.addEventListener("DOMContentLoaded", () => {
//     const selcc = document.querySelector("#selcc");
//     const selff = document.querySelector("#selff");
  
//     const celsius = document.querySelector("#celsius");
//     const fahrenheit = document.querySelector("#fahrenheit");
  
//     const div1 = document.querySelector("#div1");
//     const div2 = document.querySelector("#div2");
  
//     //단위 표시
//     div1.textContent = selcc.value;
//     div2.textContent = selff.value;

//     //select 값이 변경됫을때

  
//     function convertTemperature() {
//         if (selcc.value === "°C" && selff.value === "°F") {
//           const celsiusTemp = parseFloat(celsius.value);
//           const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
//           div1.textContent = `${celsiusTemp} °C`;
//           div2.textContent = `${fahrenheitTemp.toFixed(2)} °F`;
//         } else if (selff.value === "°F" && selcc.value === "°C") {
//           const fahrenheitTemp = parseFloat(div2.value);
//           const celsiusTemp = ((fahrenheit - 32) * 5) / 9;
//           div1.textContent = `${fahrenheit} °F`;
//           div2.textContent = `${celsiusTemp.toFixed(2)} °C`;
//         }
//       }
      
//     selcc.addEventListener("input", convertTemperature);
//     selff.addEventListener("input", convertTemperature);
    
//   });
  