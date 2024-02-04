function signup() {
    var username  = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (username === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all required blanks");
        return;
    }
    if (password !== confirmPassword) {
        alert ("Password donot match. Please try again");
        return;
    }
    alert("Signup successful. Welcome!")
}