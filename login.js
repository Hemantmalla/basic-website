document.addEventListener("DOMContentLoaded", () => {

    /*signup page settings */
    if (document.getElementById('signupForm')) {
        const signupForm = document.getElementById('signupForm');

        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('signupName').value;
            const gmail = document.getElementById('signupGmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;

            let users = JSON.parse(localStorage.getItem('users')) || [];

            const userExists = users.some(user => user.gmail === gmail);
            if (userExists) {
                alert("An account with this email exists!");
                return;
            }

            const newUser = { name, gmail, password, confirmPassword };
            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = "login.html";
        });
    }

    /* login form */
    if (document.getElementById("loginForm")); {
        const loginForm = document.getElementById("loginForm");
        const errorMessage = document.getElementById("errorMessage");

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const gmail = document.getElementById('loginGmail').value;
            const password = document.getElementById('loginPassword').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const foundUser = users.find(user => user.gmail === gmail && user.password === password);
            if (foundUser) {
                localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
                window.location.href = 'Index.html';
            } else {
                errorMessage.textContent = 'Invalid email or password.';
            }
        });
    }
});