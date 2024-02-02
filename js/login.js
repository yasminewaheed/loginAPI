var inputName = document.getElementById("inputName");
var inputemail = document.getElementById("inputemail");
var inputpass = document.getElementById("inputpass");
var error2 = document.getElementById("error2");
function retreive() {
  if (!window.localStorage.getItem("users")) return;
  arrlist = JSON.parse(window.localStorage.getItem("users"));
}
retreive();
function check() {
  for (var i = 0; i < arrlist.length; i++) {
    if (
      arrlist[i].signupemail == inputemail.value &&
      arrlist[i].signuppass == inputpass.value
    ) {
      localStorage.setItem("signupName", arrlist[i].signupName);
      window.location = "./home.html";
    } else {
      error2.classList.remove("d-none");
    }
  }
}
document.getElementById("btnlocation").addEventListener("click", function () {
  window.location = "./signup.html";
});

function validitionemail() {
  var textemail = inputemail.value;
  var regexemail = /^\S+@\S+\.\S+$/;
  if (regexemail.test(textemail) == true) {
    inputemail.classList.add("is-valid");
    inputemail.classList.remove("is-invalid");
    return true;
  } else {
    inputemail.classList.add("is-invalid");
    inputemail.classList.remove("is-valid");
    return false;
  }
}
function validitionpass() {
  var textpass = inputpass.value;
  var regexpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regexpass.test(textpass) == true) {
    inputpass.classList.add("is-valid");
    inputpass.classList.remove("is-invalid");
    return true;
  } else {
    inputpass.classList.add("is-invalid");
    inputpass.classList.remove("is-valid");
    return false;
  }
}
