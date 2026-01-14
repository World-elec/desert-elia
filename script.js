 // Sélectionner tous les éléments avec la classe fade-in
const faders = document.querySelectorAll('.fade-in');

// Options de l'observer pour l'intersection
const options = {
threshold: 0.1 // 10% visible pour déclencher l'animation
};

// Créer l'observer
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('visible'); // ajoute la classe visible
observer.unobserve(entry.target); // stop l'observation après apparition
}
});
}, options);

// Observer chaque élément
faders.forEach(fader => {
observer.observe(fader);
});

/* =========================
Hero slider (images qui défilent)
========================= */

const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showNextSlide() {
slides[currentSlide].classList.remove('active');
currentSlide = (currentSlide + 1) % slides.length;
slides[currentSlide].classList.add('active');
}

// Change d’image toutes les 4 secondes
setInterval(showNextSlide, 4000);