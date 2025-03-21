document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // ป้องกันการ reload หน้าเว็บ
        window.location.href = "../Dashboard/index.html"; // ไปที่ Dashboard
    });
});
// Get input and label elements
const idInput = document.getElementById('user-id');
const idLabel = document.querySelector('.id-label');

const passwordInput = document.getElementById('password');
const passwordLabel = document.querySelector('.password-label');

// Change ID Label on Focus
idInput.addEventListener('focus', () => {
    idLabel.textContent = 'Enter your ID';
});
idInput.addEventListener('blur', () => {
    if (idInput.value === '') {
        idLabel.textContent = 'ID';
    }
});

// Change Password Label on Focus
passwordInput.addEventListener('focus', () => {
    passwordLabel.textContent = 'Enter your Password';
});
passwordInput.addEventListener('blur', () => {
    if (passwordInput.value === '') {
        passwordLabel.textContent = 'Password';
    }
});
