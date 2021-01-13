const carouselImage = ["yatch1.jpg", "yatch2.jpg", "yatch3.jpg"];

var currentIndexNext = 0;
var currentIndexPrev = carouselImage.length;

function next(){
    
    for(var i = 0; i < carouselImage.length; i++){
        if(document.getElementById('carousel-image').src == carouselImage[i]){
            currentIndexNext = i;
        }
    }
    console.log(currentIndexNext);
    currentIndexNext = currentIndexNext + 1;
    document.getElementById('carousel-image').src = carouselImage[(currentIndexNext)%carouselImage.length];
}

function prev(){
    
    for(var i = 0; i < carouselImage.length; i++){
        if(document.getElementById('carousel-image').src == carouselImage[i]){
            currentIndexPrev = i;
        }
    }

    console.log(currentIndexPrev);
    if(currentIndexPrev == 0){
        currentIndexPrev = 4;
    }
    currentIndexPrev = currentIndexPrev - 1;
    document.getElementById('carousel-image').src = carouselImage[currentIndexPrev];
}

// const imgContainer = document.getElementsByClassName('image-container');

// imgContainer.addEventListener(mousemove, function(){
//      clearInterval(slider);
// })
var slider = setInterval(next, 1000);
function mouseOver(){
   clearInterval(slider);
}

function mouseOut(){
    clearInterval(slider)
    var anotherslider = setInterval(next, 1000);
}



// window.onload = initDivMouseOver;
// function initDivMouseOver(){
//     var div = document.getElementById("image-container");
//     div.mouseIsOver = false;
//     div.onmouseover = function(){
//         this.mouseIsOver = true;
//     };
//     div.onmouseout = function(){
//         this.mouseIsOver = false;
//     }
//     div.onclick = function(){
//         if(this.mouseIsOver){
//             clearInterval(slider);
//         }else{
//             continue;
//         }
//     }
// }


