// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randBtn = document.querySelector('.random-btn');

const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const paragraph = document.getElementById("info");

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
});


function showPerson(person){
  const item = reviews[person];
  image.src = item.src;
  author.textContent = item.name;
  job.textContent = item.job;
  paragraph.textContent = item.text;
}

randBtn.addEventListener("click", function () {
  var randNum = Math.floor(Math.random() * reviews.length);
  image.src = reviews[randNum].img;
  author.innerHTML = reviews[randNum].name;
  job.innerHTML = reviews[randNum].job;
  paragraph.innerHTML = reviews[randNum].text;
})

nextBtn.addEventListener("click", function () {
  // var currentPersonId = searchId();
  // var nexPersonId = currentPersonId + 1;
  // if (nexPersonId === 5) {
  //   nexPersonId = 1;
  // }
  // image.src = reviews[nexPersonId - 1].src;
  // author.innerHTML = reviews[nexPersonId - 1].name;
  // job.innerHTML = reviews[nexPersonId - 1].job;
  // paragraph.innerHTML = reviews[nexPersonId - 1].text;
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
})

prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
})


// function searchId() {
//   for (let i = 0; i < reviews.length; i++) {
//     if (author.innerHTML === reviews[i].name) {
//       return reviews[i].id;
//     }
//   }

// }
