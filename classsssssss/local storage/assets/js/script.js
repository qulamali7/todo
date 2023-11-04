const arr = [{ name: "Tony" }, { year: "1983" }];
localStorage.setItem("data", JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem("data")));

function setlocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getlocalStorage(key) {
  console.log(JSON.parse(localStorage.getItem(key)));
}
