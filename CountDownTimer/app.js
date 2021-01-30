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

let futureDate = new Date(2021, 0, 30, 11, 27, 0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const monthNumber = futureDate.getMonth();
const dayOfWeekNumber = futureDate.getDay();
let dayOfMonth = futureDate.getDate();
console.log(dayOfMonth);


giveaway.textContent = `giveaway ends on ${weekdays[dayOfWeekNumber]}, ${dayOfMonth} ${months[monthNumber]} ${year} ${hours}:${mins}am`;