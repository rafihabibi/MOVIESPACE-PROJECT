const formLogin = document.getElementById("signUp-form");
const inputLogin = document.getElementById("input-user");
const errorMessage = document.getElementById("error-message-email");
const emailUser = (JSON.parse(localStorage.getItem("userEmails"))) || [];

const inputPassword = document.getElementById("input-password");
const confirmPassword = document.getElementById("confirm-password");
const passwordUser = (JSON.parse(localStorage.getItem("passwordUsers"))) || [];
const errorMPass = document.getElementById("error-message-pass");

formLogin.addEventListener("submit", function(event) {
    
    event.preventDefault();
    let statusError = false;
    const passValue = inputPassword.value;
    const confirmValue = confirmPassword.value;
    if(passValue !== confirmValue){
        errorMPass.classList.remove("hidden");
        statusError = true;
    } else {
        errorMPass.classList.add("hidden");
    }

    const addValue = inputLogin.value
    if(emailUser.includes(addValue)) {
        errorMessage.classList.remove("hidden");
        statusError = true;
    } else {
        errorMessage.classList.add("hidden");
    }

    if(statusError) {
        return;
    } else {
        emailUser.push(addValue);
        const stringData = JSON.stringify(emailUser);
        localStorage.setItem("userEmails", stringData);

        passwordUser.push(passValue);
        const stringPassword = JSON.stringify(passwordUser);
        localStorage.setItem("passwordUsers", stringPassword);
    }
});






