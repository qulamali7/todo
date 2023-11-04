const img = document.querySelector(".card img");
const iconLeft = document.querySelector(".card .left");
const iconRight = document.querySelector(".card .right");

iconRight.addEventListener("click", function () {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  if (active.nextElementSibling !== null) {
    active.nextElementSibling.classList.add("active");
  } else {
    img.firstElementChild.classList.add("active");
  }
});
