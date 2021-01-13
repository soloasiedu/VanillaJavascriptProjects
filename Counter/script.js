
var myVariable = setInterval(incrementNumber, 0.0000001);
function incrementNumber(){
    var highestNumber = 10000;
    var x = parseInt(document.getElementById('numbers').innerHTML);
    x = x + 12;
    if(parseInt(document.getElementById('numbers').innerHTML) < highestNumber){
        document.getElementById('numbers').innerHTML = x;
    }else{
        document.getElementById('numbers').innerHTML = highestNumber;
        clearInterval(myVariable);
    }
    
}

// if(parseInt(document.getElementById('numbers').innerHTML) == 2000){
//     clearInterval(myVariable);
// }