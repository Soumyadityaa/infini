document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Add active class to the clicked button
            button.classList.add('active');

            // 3. Get the filter category
            const filterValue = button.getAttribute('data-filter');

            // 4. Iterate over gallery items and show/hide based on class
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hide');
                } else {
                    if (item.classList.contains(filterValue)) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                }
            });
        });
    });
});