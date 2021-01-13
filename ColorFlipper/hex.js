const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const body = document.querySelector('body');
// const colorText = document.getElementsByClassName('color');
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    var hexCode = "#";
    for(let i = 0; i < 6; i++){
        hexCode += hex[getRandomNumber()];
    }
    body.style.backgroundColor = hexCode;
    color.textContent = hexCode;
    
})
// function changeHexColor(){
//     var hexCode = "#";
//     for(let i = 0; i < 6; i++){
//         hexCode += hex[Math.floor(Math.random() * hex.length)]
//     }
//     body.style.backgroundColor = hexCode;
//     colorText[0].textContent = hexCode;

// }


function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
