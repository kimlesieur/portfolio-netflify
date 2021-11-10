// local reviews data
const reviews = [
  {
    id: 1,
    numeroProjet: "Projet 1",
    techno: "HTML/CSS",
    img:
      "./assets/images/project-1.jpg",
    text:
      "Un projet de développement web axé sur les technologies HTML & CSS",
  },
  {
    id: 2,
    numeroProjet: "Projet 2",
    techno: "HTML/CSS & JavaScript",
    img:
      "./assets/images/project-2.jfif",
    text:
      "Un projet de développement web axé sur les technologies HTML & CSS",
  },
  {
    id: 3,
    numeroProjet: "Projet 3",
    techno: "JavaScript + CSS",
    img:
      "./assets/images/project-3.png",
    text:
      "Un projet de développement web axé sur les technologies HTML & CSS",
  },
  {
    id: 4,
    numeroProjet: "Projet 4",
    techno: "HTML/CSS & JavaScript",
    img:
      "./assets/images/project-4.png",
    text:
      "Un projet de développement web axé sur les technologies HTML & CSS",
  },
];
// select items
const img = document.getElementById("person-img");
const numeroProjet = document.getElementById("numero-projet");
const techno = document.getElementById("techno");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  numeroProjet.textContent = item.numeroProjet;
  techno.textContent = item.techno;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  numeroProjet.textContent = item.numeroProjet;
  techno.textContent = item.techno;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// Function show random person to create



//Date and Timer

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//Timer in days 

const today = Date.now();
const dateCreation = new Date('October 01, 2021 12:00:00');
const nbMilliseconds = today - dateCreation.getTime();
const nbJours = Math.floor(nbMilliseconds/(24*60*60*1000));
const nbSecondes = Math.floor(nbMilliseconds/(1000));

const jours = document.getElementById("jours");
jours.innerHTML = nbJours;

const secondes = document.getElementById("secondes");
secondes.innerHTML = nbSecondes;




