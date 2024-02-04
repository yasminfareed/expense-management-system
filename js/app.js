
document.addEventListener('DOMContentLoaded', function () {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    const sign_in_btn2 = document.querySelector("#sign-in-btn2");
    const sign_up_btn2 = document.querySelector("#sign-up-btn2");

    if (sign_up_btn && sign_in_btn && container && sign_in_btn2 && sign_up_btn2) {
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });

        sign_up_btn2.addEventListener("click", () => {
            container.classList.add("sign-up-mode2");
        });

        sign_in_btn2.addEventListener("click", () => {
            container.classList.remove("sign-up-mode2");
        });

        // ... (The rest of your code)
    } else {
        console.error('One or more elements not found in the DOM.');
    }
});





function register() {
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('errorMessage');

    if (!fullname || !email || !password || !confirmPassword) {
        errorMessage.textContent = "Fields are required!";
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Password must match!";
    } else {
        // Check if email is unique
        var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        var isEmailUnique = existingUsers.every(function (user) {
            return user.email !== email;
        });

        if (!isEmailUnique) {
            errorMessage.textContent = "Email already in use!";
        } else {
            // Save user details to local storage
            var newUser = { fullname: fullname, email: email, password: password };
            existingUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(existingUsers));

            // Redirect to login page
            window.location.href = 'login.html';
        }
    }
}


function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
    let users = [];
    const storageResults = localStorage.getItem('users');

    if (storageResults){
      users = JSON.parse(storageResults);
    }

    if (!email || !password) {
        errorMessage.textContent = "Fields are required!";
    } else {
        // Retrieve user data from local storage
        var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find the user with matching email and password
        var matchedUser = existingUsers.find(function (user) {
            return user.email === email && user.password === password;
        });

        if (!matchedUser) {
            errorMessage.textContent = "Invalid credentials!";
        } else {
            // Set the active user in local storage
            localStorage.setItem('activeUser', JSON.stringify(matchedUser));

            // Redirect to home/dashboard
            window.location.href = 'index.html';
        }
    }
}