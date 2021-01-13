var para1 = document.getElementById('show');

var width = window.innerWidth || window.documentElement.clientWidth || window.document.body.clientWidth;
var height = window.innerHeight || window.documentElement.clientHeight || window.body.clientHeight;
para1.innerHTML = width + " " + height;

var para2 = document.getElementById('show2');
para2.innerHTML = "Screen width: "+ screen.width + " screen height: " + screen.height + 
" available screen width: " + screen.availWidth + " available screen height: " + screen.availHeight +
" available color depth: " + screen.colorDepth + " available pixel depth: " + screen.pixelDepth;


var para3 = document.getElementById('location');
para3.innerHTML ="Location href: " + location.href + " Location hostname: " + location.hostname + 
"Location pathname: " + location.pathname + " Location protocol: " + location.protocol;


function okOrCancel(){
    var txt = "";
    if(confirm("Press a button")){
        txt = "You pressed ok";
    }else{
        txt = "You pressed cancel";
    }
    document.getElementById("confirmation").innerHTML = txt;
}

function askForName(){
    let txt = "";
    var person = prompt("What is your name");
    if(person == null || person == ""){
        txt = "User cancelled the prompt";
    }else{
        txt = "Hello " + person + " How are you doing today?";
    }
    document.getElementById('prompt').innerHTML = txt;
}

document.getElementById("ternary").innerHTML = (4 > 3) ? "true":"false";


// function moveFoward(){
//     location.assign("https://www.google.com");
// }
// setTimeout(moveFoward, 2000);
// setTimeout(window.history.back(), 7000);


/*
window.open() function 
                       */

// window.open("https://www.google.com", "_blank");
// var myWindow = window.open("", "MsgWindow", "width=200,height=100");
// myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");

// var myWindow = window.open("", "_self");
// myWindow.document.write("<h1>This window replaces the current window</h1>");

// window.open("https://www.w3schools.com", "_blank", 
// "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=500,width=500,height=800");

// window.open("https://www.google.com/", "_blank");
// window.open("https://www.instagram.com/", "_blank");


/* window.moveTo() function
                            */

// function openWin(){
//     myWindow = window.open('', '', 'width=200, height = 100');
//     myWindow.document.write("<p>This is 'myWindow'</p>");
// }

// function moveWin(){
//     myWindow.moveTo(500,500);
//     myWindow.focus();
// }

// function moveWinBy(){
//     myWindow.moveBy(75,75);
//     myWindow.focus();
// }
// function resizeWin(){
//     myWindow.resizeTo(400,200);
//     myWindow.focus();
// }

// openWin();

// setTimeout(moveWin, 4000);
// setTimeout(moveWinBy, 6000);
// setTimeout(resizeWin, 8000);