document.addEventListener('DOMContentLoaded', () => {
    // Selectors - Ungal HTML id/class peyargalukku thagundaar poal maatrikollungal
    const signupBtn = document.querySelector('.signup-button'); // Signup button class
    const nameInput = document.querySelector('input[placeholder="Enter your Name"]');
    const phoneInput = document.querySelector('input[placeholder="Enter your Contact Number"]');
    const emailInput = document.querySelector('input[placeholder="Enter your Email address"]');
    const passwordInput = document.querySelector('input[placeholder="Enter your Password"]');

    // Email validation function (Regex)
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    // Signup Function
    const handleSignup = (e) => {
        e.preventDefault();

        const userData = {
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        };

        // 1. Empty Fields Check
        if (!userData.name || !userData.phone || !userData.email || !userData.password) {
            alert("Ella details-aiyum nirappungal (Please fill all fields)!");
            return;
        }

        // 2. Email Format Check
        if (!validateEmail(userData.email)) {
            alert("Sariyaana email mugavariyai ullidungal!");
            return;
        }

        // 3. Password Length Check
        if (userData.password.length < 6) {
            alert("Password kuraindhadhu 6 ezhuthukkal irukka vendum!");
            return;
        }

        // Success - Ingu neengal API call (fetch/axios) seiyalaam
        console.log("User Registered:", userData);
        alert("Account Created Successfully!");
        
        // Login pakkathirku selvadhatku
        window.location.href = "index.html"; 
    };

    // Event Listener
    if (signupBtn) {
        signupBtn.addEventListener('click', handleSignup);
    }
});