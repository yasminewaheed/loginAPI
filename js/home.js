var btnacrtion = document.getElementById("btnacrtion");
console.log(btnacrtion);
var welcome = document.getElementById("welcome");
console.log(welcome);

btnacrtion.addEventListener("click", function () {
  window.location = "./index.html";
});

function retreive() {
  if (!window.localStorage.getItem("users")) return;
  arrlist = JSON.parse(window.localStorage.getItem("users"));
}
retreive();

if (localStorage.getItem("users") != null) {
  welcome.innerHTML = `welcome ${localStorage.getItem("signupName")}`;
}
var btnacrtion22 = document.getElementById("btnacrtion22");
var buttonaction22 = document.getElementById("buttonaction22");
buttonaction22.addEventListener("click", function () {
  btnacrtion22.classList.remove("d-none");
});
btnacrtion22.addEventListener("click", function () {
  window.location = "./index.html";
});
