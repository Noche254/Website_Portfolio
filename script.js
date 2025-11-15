// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in effect
const sections = document.querySelectorAll('.fade-in');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Mobile Navigation Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Modal Handling
const modal = document.getElementById('contactModal');
const openModalBtn = document.getElementById('openModalBtn');

openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Back to Top Button
window.onscroll = function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

document.getElementById('backToTopBtn').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('cf-name');
        const email = document.getElementById('cf-email');
        const message = document.getElementById('cf-message');
        const feedback = document.getElementById('contactFeedback');
        const submitBtn = document.querySelector('.contact-submit');

        // basic validation
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            feedback.textContent = 'Please fill all required fields.';
            feedback.style.color = '#c82333';
            return;
        }

        // show sending state
        submitBtn.classList.add('sending');
        submitBtn.disabled = true;
        feedback.textContent = '';

        // simulate async send
        setTimeout(() => {
            submitBtn.classList.remove('sending');
            submitBtn.disabled = false;
            feedback.style.color = '#1e7e34';
            feedback.textContent = 'Message sent — thank you!';
            contactForm.reset();
            // small animation on success
            submitBtn.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(1.05)' },
                { transform: 'scale(1)' }
            ], { duration: 300 });
        }, 900);
    });
}

// Timed Chat Tooltip
document.addEventListener('DOMContentLoaded', () => {
    const chatTooltip = document.getElementById('chatTooltip');

    if (chatTooltip) {
        // Show the tooltip
        setTimeout(() => {
            chatTooltip.classList.add('show');
        }, 500); // Small delay to ensure the page is settled

        // Hide the tooltip after 4 seconds
        setTimeout(() => {
            chatTooltip.classList.remove('show');
        }, 4000); // 4 seconds
    }
});
