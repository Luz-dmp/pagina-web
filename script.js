
const menuIcono = document.getElementById('menu-icono');
const navbar = document.getElementById('navbar');

menuIcono.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const formulario = document.querySelector('#registro-form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar recarga de la página

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('password').value;

    if (!nombre || !email || !telefono || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    
    const datosGuardados = localStorage.getItem('usuario');
    if (datosGuardados) {
        const usuarioExistente = JSON.parse(datosGuardados);
        if (usuarioExistente.email === email) {
            alert('Ya tienes una cuenta registrada. Por favor, inicia sesión.');
            window.location.href = "gracias.html";
            return;
        }
    }

    
    const datosUsuario = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        password: password, // Guardar la contraseña
    };

    
    localStorage.setItem('usuario', JSON.stringify(datosUsuario));

    
    alert('¡Gracias por registrarte! Redirigiendo a la página de inicio.');
    window.location.href = "gracias.html";
});