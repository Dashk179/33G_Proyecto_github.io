fetch('js/informacion.json')
   .then(response => response.json())
   .then(data => {
      // Actualizar contenido HTML con datos del archivo JSON
      document.getElementById('title').textContent = data.title;

      const descriptionElement = document.getElementById('description');
      data.description.forEach(paragraph => {
         const p = document.createElement('p');
         p.textContent = paragraph;
         descriptionElement.appendChild(p);
      });

      document.getElementById('location').textContent = data.location;
      document.getElementById('category').textContent = data.category;
      document.getElementById('model').textContent = data.model;
      document.getElementById('camera').textContent = data.camera;
   }).catch(error => console.error('Error al cargar el archivo JSON', error));
