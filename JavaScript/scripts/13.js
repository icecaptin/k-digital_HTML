document.addEventListener("DOMContentLoaded", () => {
  const bts = document.querySelectorAll("button");
  console.log(bts);
    bts.forEach((item, idx) => {
    console.log(idx, item.textContent);

    document.getElementById("h_div").innerHTML = bts.textContent;
  });
});

//   for(let item of bts) {
//     console.log(item.textContent)
//   }

//   for(let [k, v] of bts.entries()) {
//     crossOriginIsolated.log(k, v.textContent);
//   }
//   document.querySelectorAll("#h2_id").textContent = bts.textContent;

//   for (let i = 0; i < bts.length; i++) {
//     console.log(bts[i].textContent);
//   }

//   bts.forEach((item) => {
//     console.log(item.textContent);
//   });



// for (let idx in bts) {
//     console.log(bts[idx].textContent);
//   }
