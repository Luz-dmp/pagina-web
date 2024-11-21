
const menuIcono = document.getElementById('menu-icono');
const navbar = document.getElementById('navbar');


menuIcono.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre === '' || email === '' || telefono === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    
    console.log(`Formulario enviado:
    Nombre: ${nombre}
    Correo: ${email}
    Teléfono: ${telefono}`);

   
    alert('¡Gracias por tu inscripción! Nos pondremos en contacto contigo pronto.');

    formulario.reset(); 
});