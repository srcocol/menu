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

// script.js
// Manejar el lightbox solo para imágenes en el menú
document.querySelectorAll('main img').forEach(image => {
  image.addEventListener('click', function() {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      
      // Obtener la ruta de la imagen clicada
      const imgSrc = this.src;

      // Reemplazar el nombre del archivo con la versión XL
      const imgXL = imgSrc.replace('.jpg', 'XL.jpg');

      // Mostrar el lightbox con la imagen XL
      lightbox.style.display = "flex";  
      lightboxImg.src = imgXL;  
  });
});

// Cerrar el lightbox al hacer clic fuera de la imagen
document.getElementById('lightbox').addEventListener('click', function(event) {
  if (event.target !== document.getElementById('lightbox-img')) {
      this.style.display = "none";
  }
});