document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('button.login-btn'); 
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const rememberMe = document.querySelector('input[type="checkbox"]');

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

    // Trigger on button click
    const loginBtn = document.querySelector('.login-container button'); // Update selector based on your HTML
    if(loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
    }
});