document.addEventListener('DOMContentLoaded', () => {
    // Select the form components
    const contactForm = document.querySelector('.send-message-form'); // Check your form class name
    const submitBtn = document.querySelector('button[type="submit"]'); // Or the button with "Submit" text

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault(); 

        // Input values-ai edukkavum
        const email = document.querySelector('input[type="email"]').value.trim();
        const name = document.querySelectorAll('input[type="text"]')[0].value.trim(); // Assuming 2nd input is name
        const message = document.querySelector('textarea').value.trim();

        // 1. Basic Validation 
        if (!email || !name || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // 2. Email Validation (Regex pattern)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // 3. UI Feedback 
        submitBtn.innerText = "Sending...";
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        // 4. Mock API Call 
        setTimeout(() => {
            console.log("Form Submitted:", { name, email, message });
            
            // Success Message
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            
            // Form-ai reset seiyavum
            document.querySelector('input[type="email"]').value = "";
            document.querySelectorAll('input[type="text"]')[0].value = "";
            document.querySelector('textarea').value = "";


            submitBtn.innerText = "Submit";
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
        }, 1500);
    };

    if (submitBtn) {
        submitBtn.addEventListener('click', handleFormSubmit);
    }
});
