document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Light';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? 'Light' : 'Dark';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Greeting Function
    const header = document.getElementById('header');
    const now = new Date();
    const hours = now.getHours();
    const greetingDiv = document.createElement('div');
    greetingDiv.id = 'greeting';
    
    if (hours < 12) {
        greetingDiv.textContent = 'Good Morning!';
    } else if (hours < 16) {
        greetingDiv.textContent = 'Good Afternoon!';
    } else {
        greetingDiv.textContent = 'Good Evening!';
    }
    
    header.appendChild(greetingDiv);

    // Project Details Toggle
    const toggleButtons = document.querySelectorAll('.toggle-details');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.previousElementSibling;
            details.classList.toggle('active');
            button.textContent = details.classList.contains('active') ? 'Hide Details' : 'Show Details';
        });
    });
});

// Contact Form Validation
function validateContactForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('contact-phone').value;
    const message = document.getElementById('contact-message').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (phone && !phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

// Survey Form Validation
function validateSurveyForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const imageType = document.querySelector('input[name="image-type"]:checked');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !imageType) {
        alert('Please fill in all required fields.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Survey submitted successfully!');
    return true;
}