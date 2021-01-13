const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const body = document.querySelector('body');
// const colorText = document.getElementsByClassName('color');
const colorText = document.querySelector('.color');
const btn = document.getElementById('btn');


// function changeSimpleColor(){
//     var randNum = Math.floor(Math.random() * colors.length);
//     body.style.backgroundColor = colors[randNum];
//     colorText[0].textContent = colors[randNum];
// }

btn.addEventListener("click", function(){
    var randNum = getRandomNumber();
    body.style.backgroundColor = colors[randNum];
    colorText.textContent = colors[randNum];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}


