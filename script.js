// =========================
// Fade-in au scroll
// =========================
const faders = document.querySelectorAll('.fade-in');

const options = {
threshold: 0.1 // 10% visible pour déclencher l'animation
};

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('visible');
observer.unobserve(entry.target);
}
});
}, options);

faders.forEach(fader => {
observer.observe(fader);
});

// =========================
// Hero slider automatique
// =========================
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

// Activer la première slide au chargement
slides[currentSlide].classList.add('active');

function showNextSlide() {
slides[currentSlide].classList.remove('active');
currentSlide = (currentSlide + 1) % slides.length;
slides[currentSlide].classList.add('active');
}

// Changer d’image toutes les 5 secondes
setInterval(showNextSlide, 5000);
