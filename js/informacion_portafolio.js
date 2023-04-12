window.onload = function() {
   const productDetailsContainer = document.querySelector('.pr-det_container');
   const index = new URLSearchParams(window.location.search).get('index');

   fetch('js/informacion.json')
   .then(response => response.json())
      .then(data => {
         // Actualizar contenido HTML con datos del archivo JSON según el índice
         const titleElement = productDetailsContainer.querySelector('#title');
         titleElement.textContent = data[index].title;

         const descriptionElement = productDetailsContainer.querySelector('#description');
         descriptionElement.innerHTML = ""; // Limpiar contenido previo

         data[index].description.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            descriptionElement.appendChild(p);
         });

         const locationElement = productDetailsContainer.querySelector('#location');
         locationElement.textContent = data[index].location;

         const categoryElement = productDetailsContainer.querySelector('#category');
         categoryElement.textContent = data[index].category;

         const modelElement = productDetailsContainer.querySelector('#model');
         modelElement.textContent = data[index].model;

         const cameraElement = productDetailsContainer.querySelector('#camera');
         cameraElement.textContent = data[index].camera;

         // Mostrar el contenedor de detalles del producto
         productDetailsContainer.style.display = 'block';
      }).catch(error => console.error('Error al cargar el archivo JSON', error));

   // Ocultar el contenedor de detalles del producto cuando se hace clic en el botón "Close Details"
   const closeButton = productDetailsContainer.querySelector('.cpr_det');
   closeButton.addEventListener('click', function() {
      productDetailsContainer.style.display = 'none';
   });
}