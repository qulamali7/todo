const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const ul = document.querySelectorAll("ul");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const list = document.createElement("li");
  list.append(input.value);
  ul.append(list);
  document.body.append(list);
  input.value = " ";
});

// list.addEventListener("click", function () {
//   list.style.display = "none";
// });
