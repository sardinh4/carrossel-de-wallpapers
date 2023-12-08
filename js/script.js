document.querySelector('#btn1').onclick = () =>{
    document.body.style.backgroundImage = "url(../img/bg1.jpg)"
}

document.querySelector('#btn2').onclick = () =>{
    document.querySelector('#btn1') = "url(../img/bg2.jpg)"
}

document.querySelector('#btn3').onclick = () =>{
    document.body.style.backgroundImage = "url(../img/bg3.jpg)"
}

document.querySelector('#btn4').onclick = () =>{
    document.body.style.backgroundImage = "url(../img/bg4.jpg)"
}

document.querySelector('#btn5').onclick = () =>{
    document.body.style.backgroundImage = "url(../img/bg5.jpg)"
}

window.onload = () =>{
    document.body.style.backgroundImage = "url(../img/bg1.jpg)"
}
