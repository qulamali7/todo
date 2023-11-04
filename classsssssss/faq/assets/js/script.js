const btn = document.querySelectorAll(".h3");
const text = document.querySelectorAll(".text");

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     text[i].classList.toggle("active");
//   });
// }

btn.forEach((element, i) => {
  element.addEventListener("click", function () {
    text[i].classList.toggle("active");
  });
});
