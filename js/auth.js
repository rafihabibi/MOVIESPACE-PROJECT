const formLogin = document.getElementById("login-form");
const inputLogin = document.getElementById("input-user");
const errorMessage = document.getElementById("error-message-email");

formLogin.addEventListener("submit", function(event) {
    
    event.preventDefault();
    const addValue = inputLogin.value
    if(addValue === "test@gmail.com") {
        errorMessage.classList.remove("hidden");
    } else {
        errorMessage.classList.add("hidden");
    }

});


