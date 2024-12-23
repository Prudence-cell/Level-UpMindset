const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
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