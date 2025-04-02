document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const hamburger = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
hamburger.addEventListener('click', () => {
    header.classList.toggle('open');
    hamburger.classList.toggle('open');
    burger.classList.toggle('open');
});

const ratingvalue = document.getElementById("ratingvalue");
const rating = document.getElementById("r");

rating.addEventListener('change', displayRatingValue);
rating.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    ratingvalue.innerHTML = rating.value;
}

document.getElementById("password").addEventListener('input', checkPasswordMatch);
document.getElementById("confirmPassword").addEventListener('input', checkPasswordMatch);

function checkPasswordMatch() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");

    if (password.value !== confirmPassword.value) {
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }
}

document.getElementById("email").addEventListener('input', checkEmailValidity);

function checkEmailValidity() {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    const emailPattern = new RegExp(email.pattern);
    if (!emailPattern.test(email.value)) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
}