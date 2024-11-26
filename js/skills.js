document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    // Verifica si un elemento es visible para el usuario
    const isVisible = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    };

    // Cuando la barra es visible, se lee el atributo data-width para establecer el ancho de la barra.
    const animateProgressBars = () => { 
        progressBars.forEach((bar) => {
            if (isVisible(bar) && !bar.classList.contains('animated')) {
                const width = bar.getAttribute('data-width');
                bar.style.width = `${width}%`;
                bar.classList.add('animated'); // Marca como animada para evitar reanimación
            }
        });
    };

    // Ejecuta la animación al cargar y al hacer scroll
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars();
});
