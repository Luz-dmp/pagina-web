
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

 
    const datosGuardados = localStorage.getItem('usuario');
    if (datosGuardados) {
        const usuarioExistente = JSON.parse(datosGuardados);
        if (usuarioExistente.email === email) {
            alert('Ya tienes una cuenta registrada. Por favor, inicia sesión.');
            window.location.href = "gracias.html"; // Redirigir a página de Gracias con opción de iniciar sesión
            return;
        }
    }

  
    const datosUsuario = {
        nombre: nombre,
        email: email,
        telefono: telefono,
    };

  
    localStorage.setItem('usuario', JSON.stringify(datosUsuario));

   
    alert('¡Gracias por registrarte! Redirigiendo a la página de inicio.');
    window.location.href = "gracias.html";
});