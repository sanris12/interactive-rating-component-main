const cardRatting = document.querySelector(".card-ratting");
const button = cardRatting.querySelector(".button");
const ratting = document.querySelectorAll(".choice .angka");
const nilaiRatting = document.querySelector(".nilai");
const cardThanks = document.querySelector(".card-thanks");

let nilai = "";

ratting.forEach((target) => {
  target.addEventListener("click", function (e) {
    ratting.forEach((target) => {
      if (target.classList.contains("bg-orange")) {
        target.classList.remove("bg-orange");
      }
    });
    e.target.classList.toggle("bg-orange");
    nilai = e.target.innerText;
  });
});

button.addEventListener("click", function () {
  ratting.forEach((target) => {
    if (!target.classList.contains("bg-orange")) {
      return;
    }
    cardRatting.style.display = "none";
    setTimeout(() => {
      nilaiRatting.innerText = nilai;
      cardThanks.classList.add("animasi");
    }, 500);
  });
});
