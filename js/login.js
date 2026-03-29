const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("input-user");
const errorMessage = document.getElementById("error-message-email");
const emailLogin = (JSON.parse(localStorage.getItem("userEmails"))) ||[];

const inputPassword = document.getElementById("input-password");
const textErrorPassword = document.getElementById("error-message-password");
const passwordUser = (JSON.parse(localStorage.getItem("passwordUsers"))) || [];

loginForm.addEventListener("submit", function(submitEvent) {
    submitEvent.preventDefault();
    errorMessage.classList.add("hidden");
    textErrorPassword.classList.add("hidden");
    const addValue = loginInput.value
    const indexEmail = emailLogin.indexOf(addValue);
    if(indexEmail === -1) {
        errorMessage.classList.remove("hidden");
        return;
    }
    const passValue = inputPassword.value;
    if(passValue !== passwordUser[indexEmail]) {
        textErrorPassword.classList.remove("hidden");
        return;
    }
    
    window.location.href = "../pages/listFilm.html";
}) 