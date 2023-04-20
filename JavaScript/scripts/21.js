const fun = () => {
    console.log('fun');
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log('A');
    }, 700);
    setTimeout(() => {
        console.log('B');
    }, 1000);
    // console.log('B');
    setTimeout(() => {
        console.log('C');
    }, 500);

    setTimeout(() => {
        console.log('A');
        setTimeout(() => {
            console.log('B');
            setTimeout(() => {
                console.log('C');
            }, 500)
        }, 700)
    }, 1000)
})