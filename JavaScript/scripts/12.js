const show = () => {
    event.preventDefault();
    let n = Math.floor(Math.random() * 6 ) + 1;
    document.querySelector(".h2_class > img").setAttribute("src", './dice/${n}.png')
}