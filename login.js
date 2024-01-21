function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username and password are required");
        return;
    }

    if (username === "demo" && password === "password") {
        alert("Login successful");
    } else {
        alert("Invalid username or password");
    }
}
