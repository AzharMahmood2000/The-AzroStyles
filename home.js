document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation & Smooth Scroll
    // "Explore Collections" button click seiyumpodhu product section-ukku azhagaga scroll aagum
    const exploreBtn = document.querySelector('.explore-button-wrapper button');
    const mostWantedSection = document.querySelector('.most-wanted-section');

    if (exploreBtn && mostWantedSection) {
        exploreBtn.addEventListener('click', () => {
            mostWantedSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Newsletter Subscription Logic
    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = document.querySelector('.newsletter-form input');
    const submitBtn = document.querySelector('.newsletter-form button');

    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (validateEmail(email)) {
                alert("Thank you! You've joined the Azro inner circle for 10% off.");
                emailInput.value = ''; // Input-ai clear seiya
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    // 3. Simple Search/Cart Interaction (Mockup)
    const cartIcon = document.querySelector('.icon-cart');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            alert("Your shopping cart is currently empty.");
        });
    }

    // 4. Product Hover Effect (Optional)
    // Mouse-ai product cards-mel vaikkumpodhu oru chinna animation
    const productCards = document.querySelectorAll('.product-card, .lookbook-item');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = '0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Email validate seiyum function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

});

const footerAbout = document.getElementById("footerAbout");
    const footerContact = document.getElementById("footerContact");

    if (footerAbout) {
        footerAbout.addEventListener("click", () => {
            window.location.href = "about.html";
        });
    }

    if (footerContact) {
        footerContact.addEventListener("click", () => {
            window.location.href = "contact.html";
        });
    }
