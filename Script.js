// Add this to Script.js or replace existing code

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains('active')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add some dynamic effects to the page
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    document.querySelector('header').style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// Newsletter form submission animation
document.querySelector('.newsletter form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data. For now, let's just show an animation:
    e.target.querySelector('button').classList.add('animate-pulse');
    setTimeout(() => {
        e.target.querySelector('button').classList.remove('animate-pulse');
        alert('Inscription réussie !');
    }, 2000);
});
