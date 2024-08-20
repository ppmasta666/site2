document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '10px';
    darkModeToggle.style.backgroundColor = '#007bff';
    darkModeToggle.style.color = 'white';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = '5px';
    darkModeToggle.style.cursor = 'pointer';

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    document.body.appendChild(darkModeToggle);

    // Zoomable Images
    const images = document.querySelectorAll('.zoomable');
    images.forEach(image => {
        image.addEventListener('click', function() {
            if (this.classList.contains('zoomed')) {
                this.classList.remove('zoomed');
            } else {
                this.classList.add('zoomed');
            }
        });
    });

    // Animation on Scroll
    const slideInElements = document.querySelectorAll('.slide-in');
    const zoomInElements = document.querySelectorAll('.zoom-in');
    const fadeInElements = document.querySelectorAll('.fade-in');

    const handleScrollAnimation = (elements, animationClass) => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add(animationClass);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation(slideInElements, 'animated');
        handleScrollAnimation(zoomInElements, 'animated');
        handleScrollAnimation(fadeInElements, 'animated');
    });
});
