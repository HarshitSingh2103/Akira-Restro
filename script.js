document.addEventListener('DOMContentLoaded', () => {
    // Preloader Logic
    const preloader = document.getElementById('preloader');
    
    // Automatically transition preloader after 1200ms of window load
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
            
            // Allow time for transition to finish before fully hiding from DOM flow
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1200); // Matches the 1200ms CSS transition
        }, 1200); // 1200ms delay to let the user see the loading Enso
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -15% 0px', // Trigger slightly before it hits the bottom
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after revealing to keep the state
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-y').forEach(el => {
        scrollObserver.observe(el);
    });

    // Parallax effect on hero video container
    const heroVideo = document.getElementById('hero-video');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // Parallax speed 0.5x
        if (heroVideo && scrolled < window.innerHeight) {
            heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});
