function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var isValid = true;
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    if (!username.endsWith("@gmail.com")) {
      isValid = false;
      document.getElementById("emailError").innerText = "Invalid email address. Must end with @gmail.com.";
      document.getElementById("emailError").style.display = "block";
    }
    if (password.length < 6) {
      isValid = false;
      document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
      document.getElementById("passwordError").style.display = "block";
    } else if (!/[a-zA-Z]/.test(password)) {
      isValid = false;
      document.getElementById("passwordError").innerText = "Password must contain at least one letter.";
      document.getElementById("passwordError").style.display = "block";
    }
    if (!isValid) {
      return;
    }
  }