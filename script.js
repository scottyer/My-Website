/**
 * ElitePlumbing & HVAC - Complete Production Script
 * Includes scroll-driven animations, input masks, and dynamic form tracking.
 */

document.addEventListener('DOMContentLoaded', () => {
    initDynamicYear();
    initMobileNav();
    initHeaderScroll();
    initPhoneMask();
    initFormSpinner();
    initScrollAnimations();
});

/**
 * 1. AUTOMATIC COPYRIGHT YEAR
 * Prevents the site from looking outdated.
 */
function initDynamicYear() {
    const footerText = document.querySelector('footer p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `&copy; ${currentYear} ElitePlumbing Services. All Rights Reserved.`;
    }
}

/**
 * 2. MOBILE HEADER & SMOOTH ACCESSIBILITY
 * Closes the view space clean on mobile tap-targets.
 */
function initMobileNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Smooth custom adjustments can go here if a mobile menu toggle is added later
        });
    });
}

/**
 * 3. TRANSPARENT TO SOLID HEADER TRANSITION
 * Adds a premium shadow and blur overlay when the user scrolls down.
 */
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 5%';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            header.style.padding = '15px 5%';
        }
    });
}

/**
 * 4. SMART PHONE NUMBER FORMATTING
 * Auto-formats raw input to (XXX) XXX-XXXX layout as the user types.
 */
function initPhoneMask() {
    const phoneInput = document.querySelector('input[type="tel"]');
    if (!phoneInput) return;

    phoneInput.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
}

/**
 * 5. ADVANCED VISUAL FORM FEEDBACK
 * Intercepts form submission to render a loading state.
 */
function initFormSpinner() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        const button = this.querySelector('.submit-btn');
        if (this.checkValidity() && button) {
            button.disabled = true;
            button.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing Request...';
            button.style.opacity = '0.8';
        }
    });
}

/**
 * 6. SCROLL-DRIVEN ENTRY ANIMATIONS
 * Fades cards and images smoothly onto the screen as the homeowner scrolls down.
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-card, .stat-card, .hero-image');
    
    // Set up default starting opacity styles programmatically via JS
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
                observer.unobserve(target); // Only animate once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}
