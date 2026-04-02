document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const rememberMe = document.querySelector('input[type="checkbox"]');
    const loginBtn = document.querySelector('.login-btn');

    // Login Button Click Event
    const handleLogin = (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // 1. Basic Validation
        if (username === "" || password === "") {
            alert("Please enter both username and password!");
            return;
        }

        // 2. Mock Authentication (Example)
        if (username === "admin" && password === "12345") {
            alert("Login Successful! Redirecting...");
            
            // Remember me logic (LocalStorage)
            if (rememberMe.checked) {
                localStorage.setItem('savedUsername', username);
            }

            // Redirect to home page
            window.location.href = "home.html"; 
        } else {
            alert("Invalid username or password. Please try again.");
        }
    };

    // Trigger on form submission
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Also trigger on button click as backup
    if (loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
    }
});