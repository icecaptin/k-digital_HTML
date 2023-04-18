document.addEventListener("DOMContentLoaded", () => {
    const d1click = document.querySelectorAll("#d1");
    const shuffle = document.querySelector("#shuffle");
    const btreset = document.querySelector("#btReset");

    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    let flag = true;
    let cnt = 0;
    let selarr = [];

    shuffle.addEventListener('click', () => {
        if (flag) {
            arr.sort(() => Math.random() - 0.5);
            console.log(arr);
            flag = false;
            cnt = 0;
            for (let box of d1click) {
                box.innerHTML = parseInt(box.getE('id').replace('box', ''));
            }
        }
    })
    


    for (let box of d1click) {
        box.addEventListener('click', () => {
            if (!flag) {
                let n = parseInt(box.textContent);
                // let n = parseInt(boxs.getAttribute('id').replace('box', ''));
                console.log('n=', n, 'selarr=', selarr);
                cnt++;
                console.log("cnt=", cnt)
                if (isNaN(n)) return;
                if (!flag && box.innerHTML !== '💖') {
                    let n = parseInt(box.textContent);
                    if (arr[n - 1] == 0) {
                        //하트
                        box.innerHTML = '💖';
                        if (cnt == 8) {
                            flag = true;
                            document.querySelector('h2').innerHTML = '어케햇누' ;

                            let lastarr = arr.findIndex((item)=>item == 1)
                            console.log('find=', lastarr);
                            d1click[lastarr].innerHTML = '<img src="../images/bombpic.png">';
                            // let lastArr = [1,2,3,4,5,6,7,8,9].filter((item)=> !selarr.includes(item))
                            // console.log(lastArr[0])
                            // box[lastArr[0]-1].innerHTML = '💖';
                        }
    
                    }
                    else if (arr[n - 1] == 1) {
                        box.innerHTML = '<img src="../images/bombpic.png">';
                        flag = true;
                        alert('폭탄! 게임 오버!');
                        document.querySelector('h2').innerHTML = '실패앸' ;
                    }
                }
            }
        })
    }
    
    btreset.addEventListener('click', () => {
        location.reload();
    });
});