const spanText = document.getElementById('value');

// spanText.textContent = 5;

const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const btnIncrease = document.querySelector('.increase');

btnDecrease.addEventListener("click", function(){
    var currentNum = parseInt(spanText.textContent);
    currentNum = currentNum - 1;
    spanText.textContent = currentNum;
    associatedColor();
})

btnReset.addEventListener("click", function(){
    spanText.textContent = 0;
    associatedColor();
})

btnIncrease.addEventListener("click", function(){
    var currentNum = parseInt(spanText.textContent);
    currentNum = currentNum + 1;
    spanText.textContent = currentNum;
    associatedColor();
})

function associatedColor(){
    if(parseInt(spanText.textContent) < 0){
        spanText.style.color = "red";
    }else if(parseInt(spanText.textContent) > 0){
        spanText.style.color = "green";
    }else{
        spanText.style.color = "black";
    }
}

