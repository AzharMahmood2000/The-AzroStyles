
// 1. BACK TO HOME BUTTON
document.addEventListener("DOMContentLoaded", function () {

    const backButton = document.getElementById("backButton");

    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "home.html";
        });
    }

    // 2. SOCIAL MEDIA ICONS
    const socialIcons = document.querySelectorAll(".social-icons img");

    socialIcons.forEach((icon, index) => {
        icon.addEventListener("click", function () {
            if (index === 0) {
                window.open("https://www.instagram.com", "_blank");
            } else if (index === 1) {
                window.open("https://www.twitter.com", "_blank");
            }
        });
    });

   
    // 3. ABOUT TEXT AUTO LOAD
    const aboutBox = document.getElementById("aboutText");

    if (aboutBox) {
        aboutBox.innerText =
            "Welcome to The Azro Styles. We believe in modern, minimal fashion that reflects your personality. Our collections are designed with elegance, comfort, and confidence in mind.";
    }

    // 4. SIMPLE FADE-IN EFFECT
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transition = "opacity 1s ease";

        setTimeout(() => {
            el.style.opacity = 1;
        }, 300);
    });

});
// --- ABOUT US PAGE LOGIC ---
    const backHome = document.getElementById("backHome");
    if (backHome) {
        backHome.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }