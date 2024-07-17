function cor() {

    let cor1 = Math.floor(Math.random()*256)
    let cor2 = Math.floor(Math.random()*256)
    let cor3 = Math.floor(Math.random()*256)
    let body = document.querySelector('body')
    body.style.backgroundColor = '#' +cor1+cor2+cor3

}

