// Get the DOM elements for toggling and forms
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Add event listeners to toggle between login and register forms
loginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
});

registerBtn.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Login form validation
loginForm.addEventListener('submit', function(event) {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check if email is valid
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Stop form from submitting
        return;
    }

    // Check if password is empty or too short
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault(); // Stop form from submitting
    }
});

// Registration form validation
registerForm.addEventListener('submit', function(event) {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const passwordConfirm = document.getElementById('register-password-confirm').value;

    // Check if full name is provided
    if (name.trim() === "") {
        alert('Please enter your full name.');
        event.preventDefault();
        return;
    }

    // Check if email is valid
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    // Check if passwords match
    if (password !== passwordConfirm) {
        alert('Passwords do not match.');
        event.preventDefault();
        return;
    }

    // Check if password is at least 6 characters
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();
    }
});
