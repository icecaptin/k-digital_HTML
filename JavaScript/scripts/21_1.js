document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('datePicker').addEventListener('input', fetchBoxOfficeData);

    function fetchBoxOfficeData() {
        let datePicker = document.getElementById('datePicker');
        let targetDt = datePicker.value.replaceAll('-', ''); // 날짜 형식에 맞게 '-' 제거

        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${targetDt}`;

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
                let boxTag = '';
                for (let box of boxlist) {
                    console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten);
                    //숫자 , 표시
                    let salesAmtFormatted = parseInt(box.salesAmt).toLocaleString();
                    let salesAccFormatted = parseInt(box.salesAcc).toLocaleString();

                    //랭킹 +1 -1 색깔넣기
                    let rankIntenText = '';
                    let rankIntenColor = '';
                    if (parseInt(box.rankInten) > 0) {
                        rankIntenText = `+${box.rankInten}`;
                        rankIntenColor = 'red';
                    } else if (parseInt(box.rankInten) < 0) {
                        rankIntenText = box.rankInten;
                        rankIntenColor = 'blue';
                    } else {
                        rankIntenText = box.rankInten;
                    }

                    //2023-04-20 이 아닌 2023년04월20일 형식
                    let openDt = new Date(box.openDt);
                    let openDtFormatted = `${openDt.getFullYear()}년 ${String(openDt.getMonth() + 1).padStart(2, '0')}월 ${String(openDt.getDate()).padStart(2, '0')}일`;


                    boxTag = boxTag + '<details>';
                    boxTag = boxTag + `<summary> ${box.movieNm} </summary>`;
                    boxTag = boxTag + '<ul>';
                    boxTag = boxTag + `<li> 개봉일 : ${openDtFormatted} </li>`;
                    boxTag = boxTag + `<li> 순위 : ${box.rank} </li>`;
                    boxTag = boxTag + `<li> 매출액 : ${salesAmtFormatted} 원 </li>`;
                    boxTag = boxTag + `<li> 전월대비순위 : <span style="color:${rankIntenColor}">${rankIntenText}</span> </li>`;
                    boxTag = boxTag + `<li> 누적매출액 : ${salesAccFormatted} 원 </li>`;
                    boxTag = boxTag + '</ul>';
                    boxTag = boxTag + '</details>';

                    document.querySelector('#boxdiv').innerHTML = boxTag;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
});





// document.addEventListener('DOMContentLoaded', () => {
//     let datePicker = document.getElementById('datePicker');
//     let targetDt = datePicker.value.replaceAll('-', ''); // 날짜 형식에 맞게 '-' 제거

//     let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${targetDt}`;

//     fetch(url)
//         .then((resp) => resp.json())
//         .then((data) => {
//             let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
//             let boxTag = '';
            // for (let box of boxlist) {
            //     console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten);
            //     //숫자 , 표시
            //     let salesAmtFormatted = parseInt(box.salesAmt).toLocaleString();
            //     let salesAccFormatted = parseInt(box.salesAcc).toLocaleString();

            //     //랭킹 +1 -1 색깔넣기
            //     let rankIntenText = '';
            //     let rankIntenColor = '';
            //     if (parseInt(box.rankInten) > 0) {
            //         rankIntenText = `+${box.rankInten}`;
            //         rankIntenColor = 'red';
            //     } else if (parseInt(box.rankInten) < 0) {
            //         rankIntenText = box.rankInten;
            //         rankIntenColor = 'blue';
            //     } else {
            //         rankIntenText = box.rankInten;
            //     }

            //     //2023-04-20 이 아닌 2023년04월20일 형식
            //     let openDt = new Date(box.openDt);
            //     let openDtFormatted = `${openDt.getFullYear()}년 ${String(openDt.getMonth() + 1).padStart(2, '0')}월 ${String(openDt.getDate()).padStart(2, '0')}일`;


            //     boxTag = boxTag + '<details>';
            //     boxTag = boxTag + `<summary> ${box.movieNm} </summary>`;
            //     boxTag = boxTag + '<ul>';
            //     boxTag = boxTag + `<li> 개봉일 : ${openDtFormatted} </li>`;
            //     boxTag = boxTag + `<li> 순위 : ${box.rank} </li>`;
            //     boxTag = boxTag + `<li> 매출액 : ${salesAmtFormatted} </li>`;
            //     boxTag = boxTag + `<li> 전월대비순위 : <span style="color:${rankIntenColor}">${rankIntenText}</span> </li>`;
            //     boxTag = boxTag + `<li> 누적매출액 : ${salesAccFormatted} </li>`;
            //     boxTag = boxTag + '</ul>';
            //     boxTag = boxTag + '</details>';

            //     document.querySelector('#boxdiv').innerHTML = boxTag;
            // }
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });