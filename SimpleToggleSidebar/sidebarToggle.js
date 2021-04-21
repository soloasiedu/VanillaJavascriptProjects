// const sidebar = document.getElementsByClassName("sidebar");
// console.log(sidebar);

// const bars = document.getElementsByClassName("toggleBtn");
// console.log(bars);

const sidebar = document.getElementById("sidebar");
const btn = document.getElementById("toggleBtn");
const close = document.getElementById("close");
const body = document.getElementById("body");
console.log(sidebar);
console.log(btn);
console.log(close);
console.log(body);

// function myFunction(){
//     console.log(sidebar.classList)
// }

btn.addEventListener("click", function () {
  sidebar.classList.toggle("remove-sidebar");
  if (body.classList.contains("u-black")) {
    body.classList.remove("u-black");
  } else {
    body.classList.add("u-black");
  }

});
close.addEventListener("click", function () {
  console.log("Something");
  sidebar.classList.add("remove-sidebar");
  if (body.classList.contains("u-black")) {
    body.classList.remove("u-black");
  } else {
    body.classList.add("u-black");
  }
});
