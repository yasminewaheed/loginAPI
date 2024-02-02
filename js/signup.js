var inputName = document.getElementById("inputName");
var inputemail = document.getElementById("inputemail");
var inputpass = document.getElementById("inputpass");
var submitBtn = document.getElementById("submitBtn");
var submitBtnaction = document.getElementById("submitBtnaction");
var error = document.getElementById("error");
var error2 = document.getElementById("error2");
var arrlist = []; //array empty

function retreive() {
  if (!window.localStorage.getItem("users")) return;
  arrlist = JSON.parse(window.localStorage.getItem("users"));
}
retreive();

submitBtn.addEventListener("click", function () {
  if (
    validitionName() == true &&
    validitionemail() == true &&
    validitionpass() == true
  ) {
    for (var i = 0; i < arrlist.length; i++) {
      if (arrlist[i].signupemail == inputemail.value) {
        error2.classList.remove("d-none");
        return;
      }
    }
    var signup = {
      // object
      signupName: inputName.value,
      signuppass: inputpass.value,
      signupemail: inputemail.value,
    };
    arrlist.push(signup);
    localStorage.setItem("users", JSON.stringify(arrlist)); //save in local
    error2.classList.add("d-none");
    error.classList.remove("d-none");

    // clearsignup();
    // window.location = "./index.html";
  }
});

function validitionName() {
  var text = inputName.value;
  var regex = /^[a-z]{3,8}$/;
  if (regex.test(text) == true) {
    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
    return true;
  } else {
    inputName.classList.add("is-invalid");
    inputName.classList.remove("is-valid");
    return false;
  }
}
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
function clearsignup() {
  inputName.value = "";
  inputemail.value = "";
  inputpass.value = "";
  inputemail.classList.remove("is-valid");
  inputName.classList.remove("is-valid");
  inputpass.classList.remove("is-valid");
}
document.getElementById("btnlocation").addEventListener("click", function () {
  window.location = "./index.html";
});
