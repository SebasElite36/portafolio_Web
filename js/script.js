
document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector(".typing-effect");
    const texts = ["Desarrollador Web", "Programador Full Stack", "Entusiasta de la Tecnología"]; // Textos a rotar
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; 
    const deletingSpeed = 50; 
    const delayBetweenTexts = 1500; 

    function typeEffect() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.slice(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Cambia al siguiente texto
                setTimeout(typeEffect, 500); // Pausa antes de escribir el siguiente texto
                return;
            }
        } else {
            typingElement.textContent = currentText.slice(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true; // Cambia al estado de borrado
                setTimeout(typeEffect, delayBetweenTexts); // Pausa antes de borrar
                return;
            }
        }

        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeEffect();
});
// navegacion entre paginas
document.querySelectorAll('.nav-link').forEach(link => { 
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetPage = this.getAttribute('href'); 
        window.location.href = targetPage; 
    });
});

// animacion de imagenes del portafolio
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)'; 
        card.style.boxShadow = '0 4px 15px var(--text-secondary)'; 
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; 
        card.style.boxShadow = 'none'; 
    });
});


const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || correo === '' || mensaje === '') {
            alert('Por favor, completa todos los campos antes de enviar.');
        } else {
            alert('Formulario enviado exitosamente.');
            form.reset(); 
        }
    });
}
//filtrado del portafolio
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const projects = document.querySelectorAll('.project-card');

        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    });
});
