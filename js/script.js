document.addEventListener('DOMContentLoaded', () => {
    /* --- THEME TOGGLE LOGIC --- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        // Defaults to 'light' via the HTML tag, saving it to ensure state
        localStorage.setItem('theme', 'light');
    }

    // Toggle theme event
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    /* --- MOBILE MENU LOGIC --- */
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');
    
    mobileMenuToggle.addEventListener('click', () => {
        desktopNav.classList.toggle('active');
    });
});