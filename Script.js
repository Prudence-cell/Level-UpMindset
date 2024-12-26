document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const body = document.body;

    // Toggle menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Fermer le menu au clic sur un lien
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Fermer le menu au clic en dehors
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Support clavier
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.click();
        }
    });

    // Amélioration de l'accessibilité pour le formulaire
    document.querySelectorAll('input, textarea').forEach(element => {
        element.addEventListener('invalid', function(e) {
            e.target.setAttribute('aria-invalid', 'true');
        });
        
        element.addEventListener('input', function(e) {
            if (e.target.validity.valid) {
                e.target.removeAttribute('aria-invalid');
            }
        });
    });
});
