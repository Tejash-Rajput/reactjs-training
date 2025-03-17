let users = [];

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

window.onload = function () {
  const loggedInUser = getCookie("loggedInUser");
  if (loggedInUser) {
    showMessage("Welcome back, " + loggedInUser + "!");
  }
};

function showMessage(msg, isError = false) {
  const messageDiv = document.getElementById("message");
  messageDiv.innerText = msg;
  messageDiv.style.color = isError ? "red" : "green";
}

document.getElementById("welcomeform").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document
    .getElementById("welcomeemail")
    .value.trim()
    .toLowerCase();
  const loggedInUser = getCookie("loggedInUser");

  if (loggedInUser === email) {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("loginEmail").value = email;
    showMessage("User exists. Please log in.");
  } else {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("signup").style.display = "block";
    document.getElementById("signupEmail").value = email;
    showMessage("User not found. Please sign up.");
  }
});

document.getElementById("signupform").addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("signupFirstname").value.trim();
  const lastName = document.getElementById("signupLastname").value.trim();
  const email = document
    .getElementById("signupEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("signupPassword").value;
  const phone = document.getElementById("signupPhone").value.trim();
  const dob = document.getElementById("signupDOB").value;
  const gender = document.getElementById("signupGender").value;
  const city = document.getElementById("signupCity").value.trim();
  const hobbies = document
    .getElementById("signuphobbies")
    .value.trim()
    .split(",")
    .map((hobby) => hobby.trim())
    .filter((hobby) => hobby !== "");

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    showMessage("User already exists. Please log in.", true);
    return;
  }

  const newUser = {
    firstName,
    lastName,
    email,
    password,
    phone,
    dob,
    gender,
    city,
    hobbies,
  };

  users.push(newUser);
  console.log(newUser);

  showMessage("Signup successful! Please log in.");

  // document.getElementById("signup").style.display = "none";
  // document.getElementById("login").style.display = "block";
  // document.getElementById("loginEmail").value = email;
});

document.getElementById("loginform").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document
    .getElementById("loginEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("loginPassword").value;

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    if (existingUser.password === password) {
      showMessage("Login successful!");

      setCookie("loggedInUser", email, 1);
    } else {
      showMessage("Incorrect password!", true);
    }
  } else {
    showMessage("User does not exist!", true);
  }
});
