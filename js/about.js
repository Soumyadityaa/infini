// Initialization and specific interactions for the About page
document.addEventListener('DOMContentLoaded', () => {
    console.log("INFINI About Page Initialized.");

    // Simple Intersection Observer to fade in the Mission & Vision cards when scrolling
    const mvCards = document.querySelectorAll('.mv-card');
    
    // Initial state for animation
    mvCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in and slide up
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    mvCards.forEach(card => {
        observer.observe(card);
    });
});