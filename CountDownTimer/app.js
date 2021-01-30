const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items);

let futureDate = new Date(2021, 3, 10, 11, 27, 0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const monthNumber = futureDate.getMonth();
const dayOfWeekNumber = futureDate.getDay();
const dayOfMonth = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${weekdays[dayOfWeekNumber]}, ${dayOfMonth} ${months[monthNumber]} ${year} ${hours}:${mins}am`;

// future time in ms

const futureTime = futureDate.getTime();


function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);
  
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = t/oneDay;
  days = Math.floor(days);
  let hours = (t%oneDay) / oneHour;
  hours = Math.floor(hours);
  let mins = (t%oneHour) / oneMinute;
  mins = Math.floor(mins);
  let secs = (t%oneMinute) / 1000;
  secs = Math.floor(secs);

  const values = [days, hours, mins, secs];
  items.forEach(function(item, index){
    item.textContent = values[index];
  })
}
setInterval(getRemainingTime, 1000);
// getRemainingTime();