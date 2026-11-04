
// ==========================================
// 1. MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close mobile menu
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// ==========================================
// 2. TYPING ANIMATION
// ==========================================

const typingText = document.querySelector(".typing-text");

const roles = [
    "AI/ML Developer",
    "Generative AI Enthusiast",
    "Machine Learning Developer",
    "Python Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentRole.substring(0, characterIndex);

    let speed = isDeleting ? 50 : 100;

    // When the complete word is typed
    if (!isDeleting && characterIndex === currentRole.length) {
        speed = 1500;
        isDeleting = true;
    }

    // When the word is completely deleted
    else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

// Start typing animation
if (typingText) {
    typeEffect();
}


// ==========================================
// 3. AUTOMATIC FOOTER YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// 4. CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check whether all fields are filled
        if (!name || !email || !subject || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        // Replace this with your actual email address
        const myEmail = "YOUR_EMAIL@example.com";

        const mailSubject = encodeURIComponent(subject);

        const mailBody = encodeURIComponent(
            `Hello Palak,

Name: ${name}
Email: ${email}

Message:
${message}`
        );

        // Open the user's default email application
        window.location.href =
            `mailto:${myEmail}?subject=${mailSubject}&body=${mailBody}`;

        alert("Your email application will open. Please send your message there.");

        contactForm.reset();
    });
}
