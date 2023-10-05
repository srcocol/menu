// script.js
// Hacer una solicitud al backend
fetch('http://localhost:8000')
    .then(response => response.text())
    .then(data => {
        // Mostrar el mensaje recibido del backend en la página
        document.getElementById('mensaje').textContent = data;
    })
    .catch(error => {
        console.error('Error al obtener datos del backend:', error);
    });
