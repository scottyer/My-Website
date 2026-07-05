/**
 * NovaBusiness Dynamic Scroll Animation Engine
 * Tracks user scrolling view to trigger slide and fade transitions 
 */

// Configure the Intersection Observer to look out for on-screen layout items
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Check if the HTML element is visible on the phone/desktop screen
        if (entry.isIntersecting) {
            
            // Trigger matching CSS transition styles based on layout classes
            if (entry.target.classList.contains('fade-up')) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
            if (entry.target.classList.contains('fade-left')) {
                entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
            }
            if (entry.target.classList.contains('fade-right')) {
                entry.target.classList.add('animate__animated', 'animate__fadeInRight');
            }
            
            // Stop watching this element once the entrance animation has played once
            animationObserver.unobserve(entry.target);
        }
    });
}, { 
    // Triggers the script when 15% of the card/item is visible on screen
    threshold: 0.15 
});

// Find all HTML blocks marked for reveal and attach the tracking system
document.querySelectorAll('.scroll-reveal').forEach((element) => {
    animationObserver.observe(element);
});
