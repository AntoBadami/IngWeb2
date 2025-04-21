window.onload = () => {
    setTimeout(() => {
        document.body.style.opacity = '0';
        
        setTimeout(() => {
        window.location.href = '../html/log.html';
        }, 1000); // espera 1s para que termine la animación
    }, 5000); // espera 5s antes de empezar la animación
};