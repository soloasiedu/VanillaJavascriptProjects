const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const body = document.querySelector('body');
const colorText = document.getElementsByClassName('color');

function changeSimpleColor(){
    var randNum = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randNum];
    colorText[0].textContent = colors[randNum];
}


