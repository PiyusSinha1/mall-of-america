// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ===========================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// BUTTON CLICK HANDLERS
// ===========================

const buttons = document.querySelectorAll('.btn-primary, .btn-gradient');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Add click animation
        button.style.transform = 'scale(0.98)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);

        // Log action
        console.log('Button clicked:', button.textContent);

        // Show alert or redirect
        if (button.textContent.includes('Get in Touch') || button.textContent.includes('Explore')) {
            alert('Contact us at partnership@mallofamerica.com or call (952) 883-8800');
        }
    });
});

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation classes based on element type
            const element = entry.target;

            if (element.classList.contains('metric-card')) {
                element.style.animation = 'scale-in 0.5s ease-out forwards';
            } else if (element.classList.contains('glass-card')) {
                element.style.animation = 'slide-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
            } else if (element.classList.contains('section')) {
                element.style.animation = 'fade-in 0.6s ease-out forwards';
            }

            observer.unobserve(element);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.metric-card, .glass-card, .section').forEach(el => {
    observer.observe(el);
});

// ===========================
// PARALLAX EFFECT ON HERO
// ===========================

const hero = document.querySelector('.hero');
const floatingLights = document.querySelectorAll('.floating-light');

window.addEventListener('scroll', () => {
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `0% ${scrollPosition * 0.5}px`;
    }
});

// ===========================
// THEME TOGGLE (Optional Dark Mode)
// ===========================

function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');

    // Save preference to localStorage
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

// Check for saved theme preference or prefer-color-scheme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedDarkMode = localStorage.getItem('darkMode');

if (savedDarkMode === 'true' || (savedDarkMode === null && prefersDark)) {
    document.documentElement.classList.add('dark');
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Smooth scroll function
function smoothScroll(targetId) {
    const element = document.querySelector(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add ripple effect on button click
function addRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// FORM SUBMISSION (if needed)
// ===========================

const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted');
        alert('Thank you! We will contact you soon.');
        contactForm.reset();
    });
}

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Mall of America website loaded successfully');

    // Add initial animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fade-in 0.8s ease-out';
    }

    // Initialize all interactive elements
    initializeInteractiveElements();
});

function initializeInteractiveElements() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.metric-card, .glass-card, .retail-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });

    // Initialize button interactions
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.addEventListener('mousedown', addRippleEffect);
    });
}
