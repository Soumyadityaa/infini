document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation for the virtual tour cards on scroll
    const tourCards = document.querySelectorAll('.tour-card');
    
    // Set initial state for tour cards
    tourCards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Unobserve after the animation triggers
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    tourCards.forEach(card => {
        observer.observe(card);
    });
});