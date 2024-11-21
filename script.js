const menuIcono = document.getElementById('menu-icono');
const navbar = document.getElementById('navbar');
const formulario = document.querySelector('form');

menuIcono.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

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

    
    window.location.href = "gracias.html";
});