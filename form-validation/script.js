let form = document.getElementById("form");
let uname = document.getElementById("user_name");
let email = document.getElementById("e_mail");
let pass = document.getElementById("password");
let cpass = document.getElementById("c_password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkinput();
});
function checkinput() {
  const usernamevalue = uname.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = pass.value.trim();
  const password2value = cpass.value.trim();

  if (usernamevalue === "") {
    setError(uname, "Username is Blanked");
  } else {
    setsucess(uname);
  }

  if (emailvalue === "") {
    setError(email, "Mail-Id is Blanked");
  } else {
    setsucess(email);
  }

  if (passwordvalue === "") {
    setError(pass, "Password is Blanked");
  } else if (passwordvalue !== password2value) {
    setError(pass, "Password Does Not Match");
  } else {
    setsucess(pass);
  }

  function setError(input, message) {
    const formcontrol = input.parrentElement;
    const small = formcontrol.querySelector("small");
    formcontrol.className = "form-control error";
    small.innerText = message;
  }
}
