document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer to smoothly animate subject cards as they enter the viewport
    const subjectCards = document.querySelectorAll('.subject-card');
    
    // Set initial state
    subjectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        // Stagger the transition based on the index for a cascading effect
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the card is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Unobserve after animating to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    subjectCards.forEach(card => {
        observer.observe(card);
    });
});