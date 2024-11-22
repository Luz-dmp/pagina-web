
const menuIcono = document.getElementById('menu-icono');
const navbar = document.getElementById('navbar');


menuIcono.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar recarga de la página

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre === '' || email === '' || telefono === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }


    const datosUsuario = {
        nombre: nombre,
        email: email,
        telefono: telefono,
    };

   
    localStorage.setItem('usuario', JSON.stringify(datosUsuario));

    
    alert('¡Gracias por tu inscripción! Los datos han sido guardados en LocalStorage.');

    formulario.reset(); 
});


document.addEventListener('DOMContentLoaded', () => {
    const datosGuardados = localStorage.getItem('usuario');
    if (datosGuardados) {
        const usuario = JSON.parse(datosGuardados);
        console.log('Datos recuperados del LocalStorage:', usuario);
    }
});