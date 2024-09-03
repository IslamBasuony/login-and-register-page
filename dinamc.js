let isRegister = false;

function toggleForm() {
    const content = document.getElementById('content');
    const toggleButton = document.getElementById('toggleButton');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (isRegister) {
        content.style.transform = 'translateX(0)';
        toggleButton.textContent = 'Register';
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    } else {
        content.style.transform = 'translateX(100%)';
        toggleButton.textContent = 'Login';
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    }

    isRegister = !isRegister;
}